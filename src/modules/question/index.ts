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

router
    .route(routes.CREATE_OPTION)
    .post(
        authenticate as RequestHandler,
        questionController.createOption as any
    );

router
    .route(routes.GET_OPTIONS)
    .get(authenticate as RequestHandler, questionController.getOptions as any);

router
    .route(routes.GET_QUESTION_TYPES)
    .get(
        authenticate as RequestHandler,
        questionController.getQuestionTypes as any
    );

router
    .route(routes.UPDATE_OPTION)
    .put(
        authenticate as RequestHandler,
        questionController.updateOptions as any
    );

router
    .route(routes.DELETE_OPTION)
    .delete(
        authenticate as RequestHandler,
        questionController.removeOption as any
    );
export default router;
