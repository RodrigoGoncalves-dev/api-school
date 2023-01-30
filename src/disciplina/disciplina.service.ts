import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplina } from './disciplina-entity';
import { Repository } from 'typeorm';

@Injectable()
export class DisciplinaService {

    constructor(@InjectRepository(Disciplina) private _repository: Repository<Disciplina>) {}

    async getDisciplinas(): Promise<Disciplina[]> {
        return await this._repository.find();
    }

    async getDisciplina(_id: number): Promise<Disciplina> {
        return await this._repository.findOne({where: {id: _id}});
    }

    async createDisciplina(disciplina: Disciplina) {
        return await this._repository.save({
            id: Math.floor(Math.random() * 523 * 1000000),
            name: disciplina.name
        });
    }

    async updateDisciplina(disciplina: Disciplina, id: number) {
        return await this._repository.update({id: id},{
            name: disciplina.name
        });
    }

    async deleteDiscplina(_id: number) {
        return await this._repository.delete({id: _id});
    }
}
