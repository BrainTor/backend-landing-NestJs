import { Controller, Post ,Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import {send_mail_service} from './utils_services/send_mail_service'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,private readonly send_service:send_mail_service ) {}
  @Post('/send_location')
  async get_user_location(@Body() body: any, @Req() req:any):Promise<any>{
    const {location,  referal , time, page} = body
    return await this.appService.send_location(location, referal, req.ip ,time, page)
  }
  @Post('/send_ads')
  async send_ads(@Body() body: any):Promise<any>{
    const {number, page} = body
    return await this.send_service.sendMail_ads(number, page)
  }
  @Post('/send_connect')
  async send_connect(@Body() body: any):Promise<any>{
    const {name, third_name , addres, his_text, page} = body
    return await this.send_service.sendMail_question(name, third_name, addres, his_text,page)
  }


}
