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

router
    .route(routes.CRUD_COMMENT_LIKES)
    .post(authenticate as RequestHandler, commentController.createCommentLike);

router
    .route(routes.CRUD_COMMENT_LIKES + '/:likeId')
    .delete(
        authenticate as RequestHandler,
        commentController.deleteCommentLike
    );

router
    .route(routes.CRUD_COMMENT_LIKES + '/:commentId')
    .get(authenticate as RequestHandler, commentController.getCommentLikes);

router
    .route(routes.CRUD_COMMENT_LIKES + '/:commentId' + '/:userId')
    .get(authenticate as RequestHandler, commentController.getCommenLikeByUser);

export default router;
