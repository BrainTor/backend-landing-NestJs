import { Injectable } from '@nestjs/common';
import { LocationModel } from './Models/location_model';

@Injectable()
export class AppService {
  private variant_of_ref  = Array.from(process.env.VARIANT_OF_REF.split(',')) 
  private choised: string
  public async send_location(loc: string, ref: any, ip: string, time: string, page:String) {
    switch (ref) {
      case this.variant_of_ref[0]:
        this.choised = "yandex"
        break
      case this.variant_of_ref[1]:
        this.choised = "vk"
        
        break
      case this.variant_of_ref[2]:
        this.choised = "integration"
        break
      case this.variant_of_ref[3]:
        this.choised = "avito"
        break
      default:
        this.choised = "browser"
        break
    }

    await new LocationModel({ location: loc, place: this.choised, ip: ip, time: time, page:page}).save()
  }
}
