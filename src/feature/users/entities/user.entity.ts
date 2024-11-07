import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Credential } from './credential.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Credential, { cascade: true })
  @JoinColumn({ name: 'id_credential' })
  credential: Credential;

  @Column()
  name: string;

  @Column()
  lastName: string;
}
