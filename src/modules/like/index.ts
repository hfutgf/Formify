import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';
import { RequestHandler, Router } from 'express';
import { LikeController } from './like.controller.js';

const router = Router();
const likeController = new LikeController();

router
    .route(routes.CURD_TEMPLATE_LIKES)
    .post(authenticate as RequestHandler, likeController.create);

router
    .route(routes.CURD_TEMPLATE_LIKES + '/:likeId')
    .delete(authenticate as RequestHandler, likeController.delete);

router
    .route(routes.CURD_TEMPLATE_LIKES + '/:templateId')
    .get(authenticate as RequestHandler, likeController.getLikes);

export default router;
