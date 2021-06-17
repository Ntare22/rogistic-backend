import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    HomeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
