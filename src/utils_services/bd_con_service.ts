import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class bd_con_service implements OnModuleInit {
  private  connection: mongoose.Connection;
  async onModuleInit() {
    this.connection =  await this.connectToDatabase();
  }
  async connectToDatabase() {
    try {
      const connection =  await mongoose.connect('mongodb+srv://BrainTor:11@cluster0.qzr5zit.mongodb.net/');
      console.log('Successfully connected to DB');
      return connection.connection;
    } catch {
      console.error('Error connecting to DB:');
      process.exit(1); 
    }
  }
  async onModuleDestroy() {
    await mongoose.disconnect();
    console.log('Disconnected from DB');
  }
  getConnection():mongoose.Connection {
    return this.connection;
  }
}