import { Router } from 'express';
import studentController from '../controllers/student';

const router: Router = Router();

router.get('/telematics', studentController.getStudentsTelematics);
router.get('/systems', studentController.getStudentsSystems);
router.get('/aeros', studentController.getStudentsAeros);
router.get('/all', studentController.getAll);
router.get('/:name', studentController.getStudentByName);

export default router;
