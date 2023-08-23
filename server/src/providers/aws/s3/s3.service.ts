import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class S3Service {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  awsConfig() {
    AWS.config.update({
      region: this.configService.get<string>('S3_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY'),
        secretAccessKey: this.configService.get<string>('AWS_SECRET_KEY'),
      },
    });
  }

  async s3Upload(fileUploadDto: any): Promise<string> {
    const { file } = fileUploadDto;

    this.awsConfig();
    const s3 = new AWS.S3();
    const { buffer } = file[0];
    const params = {
      Bucket: this.configService.get<string>('S3_BUCKET'),
      Key: `foods/${uuidv4()}`,
      ACL: 'public-read',
      Body: buffer,
    };
    const { Location } = await s3.upload(params).promise();
    return Location;
  }
}
