import { IsString, MaxLength, MinLength } from 'class-validator';
import { AuthDto } from './auth.dto';

const nameMessage = 'has to be between 5 and 25 characters long';

export class RegisterDto extends AuthDto {
  constructor() {
    super();
  }

  @IsString()
  @MinLength(5, {
    message: `First name ${nameMessage}`,
  })
  @MaxLength(20, {
    message: `First name ${nameMessage}`,
  })
  firstName: string;

  @IsString()
  @MinLength(5, {
    message: `Last name ${nameMessage}`,
  })
  @MaxLength(20, {
    message: `Last name ${nameMessage}`,
  })
  lastName: string;
}
