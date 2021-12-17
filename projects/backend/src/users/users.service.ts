import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async create(createUserDto: UserInput): Promise<User> {
    // Hashear password
    const salt = await bcrypt.genSalt(10);
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async find(query: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(query).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).exec();
  }
}
