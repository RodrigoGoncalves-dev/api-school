import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomExceptionForUsers extends HttpException {
    constructor(message: string, statusCode: HttpStatus) {
        super(message, statusCode);
    }
}