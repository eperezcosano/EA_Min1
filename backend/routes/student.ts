import { Router } from 'express';
import studentController from '../controllers/student';

const router: Router = Router();

router.get('/telematics', studentController.getStudentsTelematics);
router.get('/systems', studentController.getStudentsSystems);
router.get('/aeros', studentController.getStudentsAeros);

export default router;
