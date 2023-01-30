import { Disciplina } from "src/disciplina/disciplina-entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professor {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 70})
    name: string

    @Column()
    birth: string

    @OneToOne(() => Disciplina)
    @JoinColumn()
    subject: Disciplina

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    documents: string
}
