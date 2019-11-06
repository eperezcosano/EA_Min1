import { Router } from 'express';
import userController from '../controllers/user';

const router: Router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

export default router;
