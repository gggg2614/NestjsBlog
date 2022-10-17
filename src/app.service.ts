import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getetest(): string {
    return 'gettest'
  }
  getHello(): string {
    return 'Hello World!';
  }
}
