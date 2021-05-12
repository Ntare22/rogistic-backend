import express from 'express';


const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'welcome to rogistic backend API'
    });
});

export default HomeRouter;