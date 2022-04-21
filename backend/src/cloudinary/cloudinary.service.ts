import { BadRequestException, Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

const allowedMimeTypes = ['image/jpeg', 'image/png'];

@Injectable()
export class CloudinaryService {
  private cloudinary: typeof v2;

  constructor() {
    this.cloudinary = v2;

    this.cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      secure: true,
    });
  }

  async uploadImage(req: Express.Request, file: Express.Multer.File) {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type');
    }

    const streamUpload = (
      req: Express.Request,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> => {
      return new Promise((resolve, reject) => {
        const stream = this.cloudinary.uploader.upload_stream(
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          },
        );
        Readable.from(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);
    return result;
  }
}
