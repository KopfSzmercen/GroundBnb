import { Module } from '@nestjs/common';
import { UserInterceptor } from 'src/interceptors/user.interceptor';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserInterceptor],
})
export class AuthModule {}
