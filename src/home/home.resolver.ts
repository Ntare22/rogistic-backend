import { Resolver, Query } from "@nestjs/graphql";
import { HomeService } from "./home.service";
import { HomeType } from "./home.type";

@Resolver(of => HomeType)
export class HomeResolver {
    constructor(
        private homeService: HomeService
    ){}
    @Query(returns => HomeType)
    home() {
        return this.homeService.getHome();
    }
}