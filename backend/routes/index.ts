import { Router, Request, Response, NextFunction } from 'express';
import userRouter from './user';

const router: Router = Router();

router.get('/', function (req, res) {
    res.send('Hello World Index!');
});

router.use('/user', userRouter);

export default router;
