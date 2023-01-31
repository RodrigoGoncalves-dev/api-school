import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaModule } from 'src/disciplina/disciplina.module';
import { ProfessorModule } from './professor/professor.module';
import { connection } from './db/conn';

@Module({
  imports: [
    TypeOrmModule.forRoot(connection),
    DisciplinaModule,
    ProfessorModule
  ],
})
export class AppModule {}
