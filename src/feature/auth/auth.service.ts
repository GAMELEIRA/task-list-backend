import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credential } from '../users/entities/credential.entity';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Credential)
    private credentialRepository: Repository<Credential>,
  ) {}

  async auth(createAuthDto: CreateAuthDto) {
    const credential = await this.credentialRepository.findOne({
      where: { email: createAuthDto.email, password: createAuthDto.password },
    });
    return credential;
  }
}
