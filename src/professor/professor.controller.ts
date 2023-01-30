import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from './professor-entity';

@Controller('professor')
export class ProfessorController {

    constructor(private _service: ProfessorService) {}

    @Get()
    get(): Promise<Professor[]> {
        return this._service.getProfessores()
    }

    @Get(':id')
    getOnlyOne(@Param() param: any): Promise<Professor> {
        return this._service.getProfessor(param.id);
    }

    @Post()
    create(@Body() professor: Professor): Promise<Professor> {
        return this._service.createProfessor(professor);
    }

    @Put(':id')
    update(@Param() param: any, @Body() professor: Professor) {
        return this._service.updateProfessor(professor, param.id);
    }

    @Delete(':id')
    delete(@Param() param: any) {
        return this._service.deleteProfessor(param.id);
    }
}
