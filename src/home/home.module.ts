import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';

@Module({
  providers: [],
  controllers: [HomeController]
})
export class HomeModule {}
