import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './feature/auth/auth.module';
import { Task } from './feature/task/entities/task.entity';
import { TaskModule } from './feature/task/task.module';
import { Credential } from './feature/users/entities/credential.entity';
import { User } from './feature/users/entities/user.entity';
import { UsersModule } from './feature/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'TASKLIST',
      entities: [User, Credential, Task],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
