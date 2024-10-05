import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { QuestionController } from './controller.js';

const router = Router();

const questionController = new QuestionController();

router
    .route(routes.CREATE_QUESTOIN)
    .post(authenticate as RequestHandler, questionController.create as any);

router
    .route(routes.GET_QUESTIONS)
    .get(
        authenticate as RequestHandler,
        questionController.getAllByTemplateId as any
    );

router
    .route(routes.UPDATE_QUESTION)
    .put(authenticate as RequestHandler, questionController.updated as any);

router
    .route(routes.DELETE_QUESTION)
    .delete(authenticate as RequestHandler, questionController.remove as any);

export default router;
