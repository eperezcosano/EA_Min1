import { Router } from 'express';
import subjectController from '../controllers/subject';

const router: Router = Router();

router.get('/', subjectController.getSubjects);

export default router;
