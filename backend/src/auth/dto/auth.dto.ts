import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail({ message: 'Email is invalid' })
  @IsNotEmpty()
  email: string;

  @MinLength(5, {
    message: 'Password has to be between 5 and 25 characters long',
  })
  @MaxLength(25, {
    message: 'Password has to be between 5 and 25 characters long',
  })
  password: string;
}
