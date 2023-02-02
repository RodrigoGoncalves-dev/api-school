import { HttpStatus } from "@nestjs/common";
import { CustomExceptionForUsers } from "src/exceptions/CustomExceptionForUsers";

export const exceptionFunctions = {
    exceptionAfterValidateJson: (json: object, message: string | Record<string, any>, statusCode: HttpStatus) => {
        if(JSON.stringify(json) == "" || JSON.stringify(json) == "{}")
            throw new CustomExceptionForUsers(message, statusCode);
    }
}