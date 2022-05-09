import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: User | null | undefined) => {
        if (data) {
          delete data.password;
        }

        return data;
      }),
    );
  }
}
