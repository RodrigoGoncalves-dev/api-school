import { IsNumberString } from "class-validator";

export class FindParamWithId {
    @IsNumberString()
    id: number;
}