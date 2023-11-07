import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ListUserDTO } from '../dto/ListUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findUsers() {
    const savedUsers = await this.userRepository.find();

    const usersList = savedUsers.map((user) => {
      if (!user.isActive) return;

      new ListUserDTO(user.id, user.email);
    });

    return usersList;
  }
}
