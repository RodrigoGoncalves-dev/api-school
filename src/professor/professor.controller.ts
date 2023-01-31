import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from './professor-entity';
import { FindParamWithId } from 'src/utils/findParamWithId';

@Controller('professor')
export class ProfessorController {

    constructor(private _service: ProfessorService) {}

    @Get()
    get(): Promise<Professor[]> | {} {
        return this._service.getProfessores()
    }

    @Get(':id')
    getOnlyOne(@Param() param: FindParamWithId): Promise<Professor> {
        return this._service.getProfessor(param.id);
    }

    @Post()
    create(@Body() professor: Professor): Promise<Professor> {
        return this._service.createProfessor(professor);
    }

    @Put(':id')
    update(@Param() param: FindParamWithId, @Body() professor: Professor) {
        return this._service.updateProfessor(professor, param.id);
    }

    @Delete(':id')
    delete(@Param() param: FindParamWithId) {
        return this._service.deleteProfessor(param.id);
    }
}
