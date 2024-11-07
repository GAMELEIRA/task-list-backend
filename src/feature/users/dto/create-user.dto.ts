import { Credential } from '../entities/credential.entity';

export class CreateUserDto {
  credential: Credential;
  name: string;
  lastName: string;
}
