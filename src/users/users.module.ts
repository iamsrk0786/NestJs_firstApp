import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './schema/user.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// MongooseModule.forFeature:

// This is a NestJS function that allows you to define models associated with a particular feature or module. It ensures that the model (User) and its schema (UserSchema) are available for dependency injection in the module.
// [{ name: User.name, schema: UserSchema }]:

// name: User.name: Specifies the name of the model. User.name is the name of the User class ('User' in this case).
// schema: UserSchema: Specifies the schema for the User model.
// When imported into UserModule:

// Adding MongooseModule.forFeature to imports in the UserModule makes the User model and its schema available throughout the module.
// This allows you to use Mongoose's features (e.g., queries) in services or controllers by injecting the User model using NestJS's @InjectModel() decorator.
