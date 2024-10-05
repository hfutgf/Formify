import { RequestHandler, Router } from 'express';
import { TemplaesController } from './controller.js';
import multer from 'multer';
import routes from '@src/config/routes.js';
import authenticate from '@src/middlewares/authenticate.js';

const router = Router();
const templatesController = new TemplaesController();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router
    .route(routes.CREATE_TEMPLATE)
    .post(
        authenticate as RequestHandler,
        upload.single('file'),
        templatesController.create as any
    );

router.route(routes.GET_TEMPLATES).get(templatesController.findAll as any);

router
    .route(routes.GET_TEMPLATE)
    .get(authenticate as RequestHandler, templatesController.findOne as any);

router
    .route(routes.UPDATE_TEMPLATE)
    .put(
        authenticate as RequestHandler,
        upload.single('file'),
        templatesController.update as any
    );

router
    .route(routes.REMOVE_TEMPLATE)
    .delete(authenticate as RequestHandler, templatesController.remove as any);

router.route(routes.SEARCH_TEMPLATES).get(templatesController.search as any);

export default router;
