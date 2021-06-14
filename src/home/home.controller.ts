import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    getHome() {
        return {
            message: 'welcome to the rogistic backend api'
        }
    }
}
