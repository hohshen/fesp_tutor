import { Body, Controller, Get, Inject, Logger, Next, Res, Req, UseGuards, Post, ForbiddenException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import proxy from 'http-proxy-middleware';
import { SRV_POST, SRV_USER, TEST_TOKEN } from 'src/env';
import { MICRO_SERVICE_RPC } from '../rpc.register';
import { JWTGuard } from '../common/guard/jwt.guard';
export interface LoginDto {
  account: string,
  password: string
}
export interface UserRo {
  id: string,
  name: string
}
export interface LoginRo extends UserRo {
  accessToken: string
}

@Controller('/auth')
export class AuthController {
  public constructor(
    @Inject(MICRO_SERVICE_RPC)
    protected readonly client: ClientProxy,
  ) {
  }

  private readonly userServicePrefix = 'user-service';
  private readonly postServicePrefix = 'post-service';

  @Get()
  @UseGuards(JWTGuard)
  async getHello(): Promise<any> {
    return "Hello World!"
  }

  @Post('/login')
  async login(
    @Body() dto: LoginDto
  ): Promise<any> {
    try {
      const authedUser: UserRo = await this.client
        .send(`${this.userServicePrefix}.findAccount`, dto)
        .pipe(
          timeout(5000),
        )
        .toPromise();

      const token = this.jwt(authedUser)
      return {
        ...authedUser,
        accessToken: token
      };
    } catch (e) {
      throw new ForbiddenException()
    }

  }

  @Get('/me')
  @UseGuards(JWTGuard)
  public async getMe(
    @Req() req: Request, @Res() res: Response, @Next() next: NextFunction,
  ): Promise<void> {
    proxy({
      target: SRV_USER,
      changeOrigin: true,
    })(req, res, next);
  }

  private jwt(dto: UserRo): string {
    return TEST_TOKEN
  }
}