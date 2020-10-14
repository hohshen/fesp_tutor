import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    CommonModule,
    AuthModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule { }
