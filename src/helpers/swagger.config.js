import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import env from '../env';

const swaggerDef = {
    info: {
        title: 'rogistic backend API',
        version: '1.0.0',
        description: 'inventory management system made easy'
    },
    host: env.BASE_URL,
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'token',
            scheme: 'bearer',
            in: 'header',
        },
    },
}

const options = {
    swaggerDefinition: swaggerDef,
    apis: ['./src/modules/**/*.swagger.js']
}
const swaggerDoc = swaggerJSDoc(options);

const swagger = app => app.use('/documentation', swaggerui.serve, swaggerui.setup(swaggerDoc));

export default swagger;