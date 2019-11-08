import { Router } from 'express';
import subjectController from '../controllers/subject';

const router: Router = Router();

router.get('/', subjectController.getSubjects);
router.get('/:name', subjectController.getStudentsfromSubject);

export default router;
