import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
}
