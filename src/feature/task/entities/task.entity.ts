import { User } from 'src/feature/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../enums/category.enums';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idUser' })
  user: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: Category;

  @Column()
  creationDate: Date;

  @Column()
  deadline: Date;
}
