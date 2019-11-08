import { Router } from 'express';
import studentRouter from './student';
import subjectRouter from './subject';

const router: Router = Router();

router.use('/students', studentRouter);
router.use('/subjects', subjectRouter);

export default router;
