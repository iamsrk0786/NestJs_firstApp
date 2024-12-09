import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Global configuration
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
