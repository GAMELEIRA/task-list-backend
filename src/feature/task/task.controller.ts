import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PRODUCTION } from 'src/shared/configs/enviroment';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@ApiTags(`${PRODUCTION.URL_BASE}/tasks`)
@Controller(`${PRODUCTION.URL_BASE}/tasks`)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const rest = await this.taskService.create(createTaskDto);
    return rest;
  }

  @Get('user/:userId')
  findTasksByUserId(@Param('userId') userId: number) {
    return this.taskService.findTasksByUserId(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.taskService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(+id, updateTaskDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.taskService.remove(+id);
  // }
}
