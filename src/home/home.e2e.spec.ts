
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HomeModule } from './home.module';
import { INestApplication } from '@nestjs/common';

describe('Home', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [HomeModule]
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('/GET home', () => {
        return request(app.getHttpServer())
                .get('/home')
                .expect(200)
    });

})