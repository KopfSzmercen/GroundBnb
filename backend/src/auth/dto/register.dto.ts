import { IsString, MaxLength, MinLength } from 'class-validator';
import { AuthDto } from './auth.dto';

export class RegisterDto extends AuthDto {
  constructor() {
    super();
  }

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  firstName: string;

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  lastName: string;
}
