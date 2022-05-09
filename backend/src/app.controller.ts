import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  // constructor(
  //   private readonly appService: AppService,
  //   private readonly cloudinary: CloudinaryService,
  // ) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(
  //   @Req() req: Express.Request,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   return this.cloudinary.uploadImage(req, file);
  // }
  @UseGuards(AuthGuard)
  @Get('/')
  test() {
    return 'Hello world';
  }
}
