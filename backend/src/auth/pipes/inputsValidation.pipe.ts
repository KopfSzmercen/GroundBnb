import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

interface AuthError {
  field: string;
  message: string;
}

@Injectable()
export class InputsValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const errorsArr: AuthError[] = [];
      errors.forEach((e) => {
        errorsArr.push({
          field: e.property,
          message: e.constraints[Object.keys(e.constraints)[0]],
        });
      });

      throw new BadRequestException(errorsArr);
    }
    return value;
  }

  //eslint-disable-next-line
  private toValidate(metatype: Function): boolean {
    //eslint-disable-next-line
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
