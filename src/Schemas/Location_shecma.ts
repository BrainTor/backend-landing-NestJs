import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = location & Document;

@Schema()
export class location {
  @Prop({ required: true })
  location: string;
  @Prop({ required: false })
  ref: string;
}   

export const UserSchema = SchemaFactory.createForClass(location);