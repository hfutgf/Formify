import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { CommentController } from './comment.controller.js';

const router = Router();
const commentController = new CommentController();

router
    .route(routes.CRUD_TEMPLATE_COMMENT)
    .post(authenticate as RequestHandler, commentController.create);

router
    .route(routes.CRUD_TEMPLATE_COMMENT + '/:templateId')
    .get(authenticate as RequestHandler, commentController.getAll);

router
    .route(routes.CRUD_TEMPLATE_COMMENT + '/:commentId')
    .delete(authenticate as RequestHandler, commentController.delete);

export default router;
