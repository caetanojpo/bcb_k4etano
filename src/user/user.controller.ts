import { Controller, Get } from '@nestjs/common';
import { UserService } from './services/user.service';

@Controller('/api/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    const allUsers = await this.userService.findUsers();

    return {
      data: allUsers,
      message: 'Your request was a success, congratulations! :D',
      timestamp: new Date(),
    };
  }
}
