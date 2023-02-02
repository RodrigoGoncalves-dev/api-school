import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomExceptionForUsers extends HttpException {
    constructor(message: string | Record<string, any>, statusCode: HttpStatus) {
        super(message, statusCode);
    }
}