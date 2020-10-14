import {
  Injectable, CanActivate, ExecutionContext, Inject, ForbiddenException
} from '@nestjs/common';
import { TEST_ACCOUNT, TEST_ID, TEST_TOKEN } from 'src/env';
import { UserRo } from 'src/modules/auth/auth.controller';

@Injectable()
export class JWTGuard implements CanActivate {
  public async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token: string = request.get('Authorization');
    if (token === `Bearer ${TEST_TOKEN}`) {
      const user = {
        id: TEST_ID,
        name: TEST_ACCOUNT
      }
      this.setTokenHeader(request, user)
      return true;
    }
    throw new ForbiddenException('Auth failed. Please recheck value.');
  }

  private setTokenHeader(req: Request, user: UserRo): void {
    req.headers['x-jwt-user-id'] = user.id;
    req.headers['x-jwt-org-id'] = 'Org_xxx';
    req.headers['x-jwt-role'] = 'admin';
  }
}
