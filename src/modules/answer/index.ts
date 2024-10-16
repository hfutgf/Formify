import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { AnswerController } from './answer.controller.js';

const router = Router();

const answerController = new AnswerController();

router
    .route(routes.CRUD_ANSWER)
    .post(authenticate as RequestHandler, answerController.create);

router
    .route(routes.CRUD_ANSWER + '/:answerId')
    .delete(authenticate as RequestHandler, answerController.removeAnswer);

router
    .route(routes.CRUD_ANSWER + '/:answerId')
    .put(authenticate as RequestHandler, answerController.updateAnswer);

router
    .route(routes.CRUD_ANSWER_OPTIONS + '/:answerId')
    .get(authenticate as RequestHandler, answerController.getOptions);

router
    .route(routes.CRUD_ANSWER_OPTIONS + '/:optionId')
    .put(authenticate as RequestHandler, answerController.updateOption);

export default router;
