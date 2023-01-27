import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Aluno } from 'src/interfaces/aluno.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Post("/aluno")
createClient(@Body() aluno: Aluno): object {
    return this.appService.createClient(aluno);
  }
}
