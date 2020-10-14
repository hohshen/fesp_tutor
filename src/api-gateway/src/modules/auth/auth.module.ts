import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MQ_HOST, MQ_PORT } from 'src/env';
import { MicroServiceRpc } from '../rpc.register';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    MicroServiceRpc
  ],
  controllers: [AuthController]
})
export class AuthModule { }
