import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { QuestionController } from './controller.js';

const router = Router();

const questionController = new QuestionController();

router
    .route(routes.CRUD_QUESTION + '/:templateId')
    .post(authenticate as RequestHandler, questionController.create);

router
    .route(routes.CRUD_QUESTION + '/question/:questionId')
    .get(authenticate as RequestHandler, questionController.getQuesiton);

router
    .route(routes.CRUD_QUESTION + '/:templateId')
    .get(authenticate as RequestHandler, questionController.getAllByTemplateId);

router
    .route(routes.CRUD_QUESTION + '/:templateId')
    .put(authenticate as RequestHandler, questionController.updated);

router
    .route(routes.CRUD_QUESTION + '/:questionId')
    .delete(authenticate as RequestHandler, questionController.remove);

router
    .route(routes.GET_QUESTION_TYPES)
    .get(authenticate as RequestHandler, questionController.getQuestionTypes);

router
    .route(routes.UPDATE_QUESTIONS_ORDERS)
    .put(
        authenticate as RequestHandler,
        questionController.updateQuestionsOrders
    );


export default router;
