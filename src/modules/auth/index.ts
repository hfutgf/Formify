import { RequestHandler, Router } from 'express';
import { AuthController } from './controller.js';
import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { Users } from '@prisma/client';

const router = Router();
const authController = new AuthController();

router.route(routes.REGISTER).post(authController.register);
router.route(routes.LOGIN).post(authController.login);
router.route(routes.GET_ACCESS_TOKEN).post(authController.getAccessToken);
router
    .route(routes.LOGOUT)
    .post(authenticate as RequestHandler, authController.logout);

export default router;
