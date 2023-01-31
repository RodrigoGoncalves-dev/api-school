import { Professor } from 'src/professor/professor-entity';
import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['id', 'name'], {unique: true})
export class Disciplina {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;

    @OneToOne(() => Professor, professor => professor.name, {onDelete: 'CASCADE'})
    professor: Professor;
}
