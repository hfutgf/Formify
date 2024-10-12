import authenticate from '@src/middlewares/authenticate.js';
import { Router } from 'express';
import { UserController } from './controller.js';
import routes from '@src/config/routes.confg.js';

const router = Router();
const userController = new UserController();

router.route(routes.GET_USER).get(userController.getUserById as any);

export default router;
