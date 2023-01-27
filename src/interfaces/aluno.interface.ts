import { SubjectSchool } from "./disciplina.interface";

export interface Aluno {
    name: String,
    birth: String,
    email: String,
    class: Number,
    enrollment: String,
    parent: Array<String>,
    subject: Array<SubjectSchool>
}