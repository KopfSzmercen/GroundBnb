import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { User } from 'src/entities/user.entity';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private users: UsersService) {}

  async register(body: RegisterDto): Promise<User | null> {
    const user = await this.users.findOneByEmail(body.email);
    if (user)
      throw new BadRequestException([
        {
          field: 'email',
          message: `Email ${body.email} is already used`,
        },
      ]);

    const hashedPassword = await argon2.hash(body.password);
    const newUser = await this.users.create({
      ...body,
      password: hashedPassword,
    });

    return newUser;
  }

  async signin(
    body: SignInDto,
    request: Express.Request,
  ): Promise<User | null> {
    const user = await this.users.findOneByEmail(body.email);
    const invalidCredentialsError = [
      {
        field: 'email',
        message: 'Invalid credentials',
      },
      {
        field: 'password',
        message: 'Invalid credentials',
      },
    ];
    if (!user) throw new UnauthorizedException(invalidCredentialsError);

    const passwordsDoMatch = await argon2.verify(user.password, body.password);
    if (!passwordsDoMatch)
      throw new UnauthorizedException(invalidCredentialsError);

    request.session.userId = user.id;

    return user;
  }
}
