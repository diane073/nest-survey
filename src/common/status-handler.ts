import { ResponseHandler } from './base-handler';

export class SuccessHandler {
    static success(data: any = null, message: string = 'Success') {
        return { status_code: 200, data, message };
    }

    static created(data: any = null, message: string = 'Created') {
        return ResponseHandler.createResponse(201, data, message);
    }

    static noContent(message: string = 'No Content') {
        return ResponseHandler.createResponse(204, message);
    }
}

export class ErrorHandler {
    static badRequest(message: string = 'Bad Request') {
        return ResponseHandler.createResponse(400, message);
    }
    
    static notFound(message: string = 'Not Found') {
        return ResponseHandler.createResponse(404, null, message);
    }

    static internalServerError(message: string = 'Internal Server Error') {
        return ResponseHandler.createResponse(500, message);
    }
}
