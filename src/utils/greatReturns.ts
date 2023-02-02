import { HttpStatus } from "@nestjs/common"

export const greatReturns = {
    returnWithBody: (message: string | Record<string, any>, body: string | object, statusCode: HttpStatus) => {
        return {
            "message": message,
            "body": body,
            "statusCode": statusCode
        }
    }
}