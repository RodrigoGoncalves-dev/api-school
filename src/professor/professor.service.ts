import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor-entity';
import { Repository } from 'typeorm';
import { Disciplina } from 'src/disciplina/disciplina-entity';

@Injectable()
export class ProfessorService {

    constructor(@InjectRepository(Professor) private _repository: Repository<Professor>) {}

    async getProfessores() {
        return await this._repository.find();
    }

    async getProfessor(_id: number) {
        return await this._repository.findOne({ where: {id: _id}, relations: {subject: true} });
    }

    async createProfessor(professor: Professor) {
        return await this._repository.save(professor);
    }

    async updateProfessor(professor: Professor, _id: number) {
        return await this._repository.update({id: _id}, professor)
    }

    async deleteProfessor(_id: number) {
        return await this._repository.delete({id: _id});
    }
}
