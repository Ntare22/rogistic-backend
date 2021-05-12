import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import env from './env';
import App from './app';
import swaggerDoc from './helpers/swagger.config';

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
swaggerDoc(app)
app.use(App);

const server = app.listen(env.PORT, () => {
    console.log(`server running on http://localhost:${env.PORT}`);
})

export default server;