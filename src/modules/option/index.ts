import { RequestHandler, Router } from 'express';
import { OptionController } from './option.controller.js';
import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';

const router = Router();
const optionController = new OptionController();

router
    .route(routes.CRUD_OPTIONS + '/:questionId')
    .post(authenticate as RequestHandler, optionController.createOption);

router
    .route(routes.CRUD_OPTIONS + '/:questionId')
    .get(authenticate as RequestHandler, optionController.getOptions);

router
    .route(routes.CRUD_OPTIONS + '/:questionId')
    .delete(authenticate as RequestHandler, optionController.removeOption);

router
    .route(routes.CRUD_OPTIONS + '/:optionId')
    .put(authenticate as RequestHandler, optionController.updateOptions);

router
    .route(routes.UPDATE_OPTIONS_ORDERS)
    .put(authenticate as RequestHandler, optionController.updateOptionsOrders);

export default router;
