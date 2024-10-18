import routes from '@src/config/routes.confg.js';
import { RequestHandler, Router } from 'express';
import { FormController } from './form.controller.js';
import authenticate from '@src/middlewares/authenticate.js';

const router = Router();
const formController = new FormController();
router
    .route(routes.CURD_FORM)
    .post(authenticate as RequestHandler, formController.create);

router
    .route(routes.CURD_FORM + '/:formId')
    .delete(authenticate as RequestHandler, formController.remove);

router
    .route(routes.CURD_FORM + '/:templateId')
    .get(authenticate as RequestHandler, formController.getByTemplate);

export default router;
