import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { UserController } from './controller.js';
import routes from '@src/config/routes.confg.js';

const router = Router();
const userController = new UserController();

router.route(routes.CRUD_USER + '/:userId').get(userController.getUserById);

router
    .route(routes.CRUD_USER + '/:adminId/:userId')
    .delete(authenticate as RequestHandler, userController.delete);

router
    .route(routes.CRUD_USER + '/:adminId/:userId')
    .put(authenticate as RequestHandler, userController.updateFromAdmin);

router
    .route(routes.CRUD_USER + '/:userId')
    .put(authenticate as RequestHandler, userController.update);

router
    .route(routes.CRUD_USER + '/all/:adminId')
    .get(authenticate as RequestHandler, userController.getAllUsers);

router
    .route(routes.CRUD_USER + '/role/:adminId')
    .get(authenticate as RequestHandler, userController.getUsersByRole);

export default router;
