import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciplina } from './disciplina-entity';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Disciplina])],
    providers: [DisciplinaService],
    controllers: [DisciplinaController]
})

export class DisciplinaModule {}
