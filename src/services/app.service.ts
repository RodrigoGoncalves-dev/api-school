import { Body, Injectable } from '@nestjs/common';
import { Aluno } from 'src/interfaces/aluno.interface';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      "message": "Hello World",
      "version": "0.0.1"
    };
  }

  createClient(@Body() aluno: Aluno): object {
    return {
      "aluno": aluno.name,
      "data_nascimento": aluno.birth,
      "email": aluno.email,
      "classe": aluno.class,
      "matricula": aluno.enrollment,
      "pais": aluno.parent,
      "materias": aluno.subject
    };
  }
}
