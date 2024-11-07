import { Task } from 'src/feature/task/entities/task.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credential } from './credential.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Credential, { cascade: true })
  @JoinColumn({ name: 'idCredential' })
  credential: Credential;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @Column()
  name: string;

  @Column()
  lastName: string;
}
