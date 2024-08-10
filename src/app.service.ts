import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  send_location(loc, ref) {
    console.log(loc,ref)
    // make bd
  }
}
