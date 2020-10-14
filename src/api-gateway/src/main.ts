import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import {
  MQ_HOST,
  MQ_PORT
} from './env';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: `redis://${MQ_HOST}:${MQ_PORT}`,
      // host: MQ_HOST,
      // port: MQ_PORT
    },
  });
  app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
