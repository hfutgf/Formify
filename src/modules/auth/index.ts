import { Router } from 'express';
import { AuthController } from './controller.js';
import routes from '@src/config/routes.js';

const router = Router();
const authController = new AuthController();

router.route(routes.REGISTER).post(authController.register);
router.route(routes.LOGIN).post(authController.login);

export default router;
