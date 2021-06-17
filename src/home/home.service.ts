import { Injectable } from "@nestjs/common";

// const home = {
//     message: 'welcome to the rogistic backend api'
// };
@Injectable()
export class HomeService {
    async getHome() {
        return {
            message: 'welcome to the rogistic api'
        }
    }
}