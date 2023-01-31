import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor-entity';
import { Repository } from 'typeorm';
import { CustomExceptionForUsers } from 'src/exceptions/CustomExceptionForUsers';

@Injectable()
export class ProfessorService {

    constructor(@InjectRepository(Professor) private _repository: Repository<Professor>) {}

    async getProfessores() {
        let response = await this._repository.find();

        if(response.length == 0) return {"message": "Nenhum Professor encontrado","statusCode": HttpStatus.BAD_REQUEST}

        return response;
    }

    async getProfessor(_id: number) {

        let response = await this._repository.findOne({ where: {id: _id}, relations: {subject: true} });
        
        if(response == null) throw new CustomExceptionForUsers("Não foi possível encontrar o professor", HttpStatus.NOT_FOUND);

        return response;
    }

    async createProfessor(professor: Professor) {
        if(JSON.stringify(professor) == '' || JSON.stringify(professor) == '{}') 
            throw new CustomExceptionForUsers("Não foi passado nenhuma informação", HttpStatus.BAD_REQUEST);

        let response = await this._repository.save(professor);

        if(response == null) throw new CustomExceptionForUsers("Não foi possível encontrar o professor", HttpStatus.BAD_REQUEST);

        return response;
    }

    async updateProfessor(professor: Professor, _id: number) {
        if(JSON.stringify(professor) == '' || JSON.stringify(professor) == '{}') 
            throw new CustomExceptionForUsers("Não foi passado nenhuma informação", HttpStatus.BAD_REQUEST);

        let response = await this._repository.update({id: _id}, professor)

        if(response.affected == 0) throw new CustomExceptionForUsers("Não foi possível encontrar o professor", HttpStatus.BAD_REQUEST);

        return response;
    }

    async deleteProfessor(_id: number) {
        let response = await this._repository.delete({id: _id});

        if(response.affected == 0) throw new CustomExceptionForUsers("Não foi possível encontrar o professor", HttpStatus.BAD_REQUEST);

        return response;
    }
}
