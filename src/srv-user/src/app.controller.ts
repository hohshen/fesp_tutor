import { Controller, ForbiddenException, Get, UseFilters, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { TEST_ACCOUNT, TEST_ID, TEST_PASSWORD } from './env';
import { MicroserviceExceptionFilter } from './errors/microserviceException.filter';
import { IsUserGuard } from './guards/isUser.guard';

export interface LoginDto {
  account: string,
  password: string
}

export interface UserRo {
  id: string,
  name: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/auth/me')
  @UseGuards(IsUserGuard)
  getMe(): UserRo {
    return {
      id: TEST_ID,
      name: TEST_ACCOUNT
    }
  }

  @UseFilters(MicroserviceExceptionFilter)
  @MessagePattern('user-service.findAccount')
  public authUser(dto: LoginDto): Promise<UserRo> {
    if (dto.account === TEST_ACCOUNT && dto.password === TEST_PASSWORD) {
      return Promise.resolve({
        id: TEST_ID,
        name: TEST_ACCOUNT
      })
    } else {
      throw new ForbiddenException()
    }
  }
}
