import { Router } from 'express';
import { UserController } from './controller.js';

const router = Router();
const userController = new UserController();

router.route('/users').get(userController.getAllUsers);

export default router;
