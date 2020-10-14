import {
  Injectable, CanActivate, ExecutionContext, Inject,
} from '@nestjs/common';
import { TEST_ID } from 'src/env';

@Injectable()
export class IsUserGuard implements CanActivate {
  public async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.header('x-jwt-user-id');
    console.log(request.headers)
    if (userId === TEST_ID) return true;
  }
}
