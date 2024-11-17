import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly userService: UsersService,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const user = await this.userService.findOne(createTaskDto.idUser);

    console.log(createTaskDto.idUser, user);

    const task = this.taskRepository.create({
      ...createTaskDto,
      user,
    });
    return this.taskRepository.save(task);
  }

  async findTasksByUserId(userId: number) {
    return await this.taskRepository.find({
      where: { user: { id: userId } },
    });
  }
  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} task`;
  // }
}
