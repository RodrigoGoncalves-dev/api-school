import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './disciplina-entity';

@Controller('disciplina')
export class DisciplinaController {
    constructor(private _service: DisciplinaService) {}

    @Get(':id')
    getOnlyOne(@Param() params: any): Promise<Disciplina> {
        return this._service.getDisciplina(params.id);
    }

    @Get()
    get(): Promise<Disciplina[]> {
        return this._service.getDisciplinas();
    }

    @Post()
    create(@Body() body: Disciplina): Promise<Disciplina> {
        return this._service.createDisciplina(body);
    }

    @Put(':id')
    update(@Body() disciplina: Disciplina, @Param() param: any) {
        this._service.updateDisciplina(disciplina, param.id);
    }

    @Delete(':id')
    delete(@Param() param: any) {
        return this._service.deleteDiscplina(param.id);
    }
}
