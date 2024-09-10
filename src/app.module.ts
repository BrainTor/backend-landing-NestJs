import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bd_con_service } from './utils_services/bd_con_service';
import { send_mail_service } from './utils_services/send_mail_service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    })
  ],
  controllers: [AppController],
  providers: [AppService, bd_con_service , send_mail_service],
})
export class AppModule {}
