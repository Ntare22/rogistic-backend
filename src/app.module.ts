import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';

@Module({
  imports: [HomeModule],
  exports: [AppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
