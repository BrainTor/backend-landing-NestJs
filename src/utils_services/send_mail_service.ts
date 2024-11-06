import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class send_mail_service {
  private transporter: nodemailer.Transporter;
  constructor() {   
    this.transporter = nodemailer.createTransport({
        host: 'smtp.yandex.com',  
        port: 465,                
        secure: true,     
      auth: {
        user: process.env.EMAIL_SERVER,
        pass: process.env.EMAIL_PASS
      },
    });
 
  }

  async sendMail_ads(phone_number:string, page:string): Promise<void> {
    
    const mailOptions = {
      from: process.env.EMAIL_SERVER, 
      to: process.env.MY_EMAIl, 
      subject: "Кто-то воспользовался скидкой", 
      text: `Кто-то повелся на скидку, его номер телефона: ${phone_number}, он с сайта ${page==null||page==undefined||page==""?"main":page}`
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch {
      throw new Error('Error sending email');
    }
  }

  async sendMail_question(name:string,third_name:string, addres:string, his_text:string, page:string): Promise<void> {

    const mailOptions = {
      from: process.env.EMAIL_SERVER, 
      to: process.env.MY_EMAIl, 
      subject: "у кого,то вопрос", 
      html: `
      У кого - то вопрос, его данные <br>
      Имя - ${name}<br>
      Отчество - ${third_name}<br>
      Связь - ${addres} <br>
      Его текст:<br> ${his_text}<br>
      Он с сайта ${page==null||page==undefined||page==""?"main":page}
      `
    }

    try {
        await this.transporter.sendMail(mailOptions);
    } catch {
        throw new Error('Error sending email');
    }
  }
}
  




