import { Controller, Post ,Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/locatiion')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async get_user_location(@Body() body: any):Promise<any>{
    const {location,  referal} = body
    return this.appService.send_location(location, referal)
  }
}
