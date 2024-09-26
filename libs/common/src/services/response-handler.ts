import { HttpMessage } from '@app/entities';
import { HttpException, HttpStatus } from '@nestjs/common';

export interface IResponse {
  message?: string | [string];
  data?: any;
  statusCode?: number;
  error?: any;
}

export class ResponseHandler {
  static return(data: IResponse) {
    if (data.statusCode == HttpStatus.OK) {
      return data;
    } else {
      throw new HttpException(data, data.statusCode);
    }
  }

  static makeMessage(
    data?: any,
    error?: any,
    statusCode?: number,
    message?: string,
  ): IResponse {
    if (!data && statusCode && statusCode == HttpStatus.OK) {
      statusCode = HttpStatus.NOT_FOUND;
    }

    if (!data && !error && !statusCode) {
      statusCode = HttpStatus.NOT_FOUND;
    }

    if (data && !statusCode) {
      statusCode = HttpStatus.OK;
    }

    if (error && !statusCode) {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    if (!message || message.length == 0) {
      const statusKey = HttpStatus[statusCode];
      message = HttpMessage[statusKey];
    }

    return {
      statusCode,
      data,
      error,
      message,
    };
  }

  static message(
    data?: any,
    error?: any,
    statusCode?: number,
    message?: string,
  ): IResponse {
    return this.return(this.makeMessage(data, error, statusCode, message));
  }
}
