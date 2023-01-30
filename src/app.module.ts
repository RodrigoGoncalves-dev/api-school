import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaModule } from 'src/disciplina/disciplina.module';
import { Disciplina } from './disciplina/disciplina-entity';
import { Professor } from './professor/professor-entity';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "172.18.0.1",
      "port": 3306,
      "username": "rodrigo",
      "password": "123456",
      "database": "school",
      "entities": [Disciplina, Professor],
      "synchronize": true
  }),
    DisciplinaModule,
    ProfessorModule
  ],
})
export class AppModule {}
