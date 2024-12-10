import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  // @InjectModel(User.name): This is a decorator provided by NestJS that tells the framework to inject the User model into the service. The User.name refers to the model name ('User').

  // private userModel: Model<UserDocument>: This declares a private property userModel of type Model<UserDocument>. It allows you to interact with the User model in the service, such as querying or modifying documents in the MongoDB database.
  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async findByUsername(username: string): Promise<UserDocument | undefined> {
    return this.userModel.findOne({ username });
  }

  async findById(userId: string): Promise<UserDocument> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
