import { Schema, Document, Model, model } from 'mongoose';
export interface location extends Document {
  location: string;
  place: string;
}
const locationSchema = new Schema({
    location: { type: String, required: true},
    place: { type: String, required: true },
    ip: {type:String, require:true},
    time: {type:String, require:true}, 
    page: {type:String, require:false}

});
export const LocationModel: Model<location> = model<location>('location', locationSchema);