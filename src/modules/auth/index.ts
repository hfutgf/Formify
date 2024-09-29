import { Router } from 'express';
import { AuthController } from './controller.js';
import routes from '@src/config/routes.js';

const router = Router();
const authController = new AuthController();

router.route(routes.AUTH).post(authController.register);

export default router;
