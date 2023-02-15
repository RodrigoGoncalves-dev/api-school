import { TypeOrmModule } from "@nestjs/typeorm";
import { Disciplina } from "src/disciplina/disciplina-entity";
import { Professor } from "src/professor/professor-entity";

export const connection: TypeOrmModule = {
    "type": "mysql",
    "host": "172.18.0.2",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "school",
    "entities": [Disciplina, Professor],
    "synchronize": true
}