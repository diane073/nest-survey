import { NotFoundException } from "@nestjs/common"
import { STATUS_CODES } from "http";

export class ResponseHandler {
  static findObjectValidater(object: any) {
    if (!object) {
    throw new NotFoundException('Not found')
    }
  return true
  }

  static createResponse(statusCode: number, data: any = null, message: string = '') {
    return {
      status_code: statusCode,
      data,
      message,
    };
  }
}