import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('home')
export class HomeType {
    @Field()
    message: string
}