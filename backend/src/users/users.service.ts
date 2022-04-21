import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { User } from 'src/entities/user.entity';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOneById(id: number) {
    return this.usersRepository.findOne(id);
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({ email: email });
  }

  async create(data: RegisterDto) {
    const user: User[] = await getConnection().query(
      `
    INSERT INTO "user" ("firstName", "lastName", email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
      [data.firstName, data.lastName, data.email, data.password],
    );
    if (user.length === 0) return null;
    return user[0];
  }
}
