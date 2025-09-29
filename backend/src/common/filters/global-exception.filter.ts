import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'Erreur interne', timestamp: new Date().toISOString() };

    this.logger.error('Erreur API', exception instanceof Error ? exception.stack : undefined);

    response.status(status).json({
      statusCode: status,
      path: request.url,
      method: request.method,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
