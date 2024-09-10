import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class send_mail_service {
  private transporter: nodemailer.Transporter;
  constructor() {   
    this.transporter = nodemailer.createTransport({
        host: 'smtp.yandex.com',  // Используем Yandex SMTP
        port: 465,                // Порт SSL
        secure: true,     
      auth: {
        user: process.env.EMAIL_SERVER,
        pass: process.env.EMAIL_PASS
      },
    });
 
  }

  async sendMail_ads(phone_number:string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_SERVER, 
      to: process.env.MY_EMAIl, 
      subject: "Кто-то воспользовался скидкой", 
      text: `Кто-то повелся на скидку, его номер телефона: ${phone_number}`
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch {
      throw new Error('Error sending email');
    }
  }

  async sendMail_question(name:string,third_name:string, adress:string, his_text:string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_SERVER, 
      to: process.env.MY_EMAIl, 
      subject: "у кого,то вопрос", 
      html: `
      У кого - то вопрос, его данные <br>
      Имя - ${name}<br>
      Отчество - ${third_name}<br>
      Связь - ${adress} <br>
      Его текст:<br> ${his_text}
      `
    }

    try {
        await this.transporter.sendMail(mailOptions);
    } catch {
        throw new Error('Error sending email');
    }
  }
}
  




