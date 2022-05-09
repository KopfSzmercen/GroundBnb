import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { UserInterceptor } from 'src/interceptors/user.interceptor';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signin.dto';
import { InputsValidationPipe } from './pipes/inputsValidation.pipe';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/register')
  @UseInterceptors(UserInterceptor)
  register(@Body(new InputsValidationPipe()) body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('/signin')
  @UseInterceptors(UserInterceptor)
  @HttpCode(200)
  signin(@Body() body: SignInDto, @Req() request: Express.Request) {
    return this.authService.signin(body, request);
  }

  @Post('/logout')
  @HttpCode(200)
  logout(@Res({ passthrough: true }) response: Express.Response) {
    response.clearCookie('userId');
    return null;
  }

  @Get('/getMe')
  @UseInterceptors(UserInterceptor)
  getMe(@Session() session: Record<string, any>) {
    if (!session.userId) return;
    return this.usersService.findOneById(session.userId);
  }
}
