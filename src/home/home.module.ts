import { Module } from '@nestjs/common';
import { HomeResolver } from './home.resolver';
import { HomeService } from './home.service';

@Module({
  providers: [HomeResolver, HomeService],
  controllers: []
})
export class HomeModule {}
