import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['id', 'name'], {unique: true})
export class Disciplina {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;
}
