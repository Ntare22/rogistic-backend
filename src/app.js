import express from 'express';
import HomeRouter from './modules/home';

const App = express.Router();

App.use(HomeRouter);

App.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: `Path not found; METHOD ${req.method}, PATH: ${req.originalUrl}`
    });
});

export default App;
