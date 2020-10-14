import {
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import {
  MQ_HOST,
  MQ_PORT
} from '../env';

export const MICRO_SERVICE_RPC = 'MICRO_SERVICE_RPC';

export const MicroServiceRpc = ClientsModule.register([
  {
    name: MICRO_SERVICE_RPC,
    transport: Transport.REDIS,
    options: {
      url: `redis://${MQ_HOST}:${MQ_PORT}`,
    },
  },
]);
