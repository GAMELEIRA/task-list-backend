import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PRODUCTION } from 'src/shared/configs/enviroment';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@ApiTags(`${PRODUCTION.URL_BASE}/auth`)
@Controller(`${PRODUCTION.URL_BASE}/auth`)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto, @Res() res: Response) {
    this.authService.auth(createAuthDto).then((data) => {
      console.log(data, 'retorno da busca');
      if (data) {
        return res.status(HttpStatus.CREATED).json({
          status: HttpStatus.CREATED,
          data,
        });
      } else {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          status: HttpStatus.UNAUTHORIZED,
          message: 'Invalid email or password',
        });
      }
    });
  }
}
