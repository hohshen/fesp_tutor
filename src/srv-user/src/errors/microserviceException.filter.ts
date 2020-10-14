import { Catch, RpcExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Catch()
export class MicroserviceExceptionFilter implements RpcExceptionFilter<unknown> {

  public catch(exception: unknown): Observable<never> {
    return throwError({
      exception
    });
  }
}
