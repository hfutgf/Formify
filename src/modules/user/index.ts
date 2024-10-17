import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { UserController } from './controller.js';
import routes from '@src/config/routes.confg.js';

const router = Router();
const userController = new UserController();

router.route(routes.CRUD_USER).get(userController.getUserById);
router
    .route(routes.CRUD_USER)
    .put(authenticate as RequestHandler, userController.update);

export default router;
