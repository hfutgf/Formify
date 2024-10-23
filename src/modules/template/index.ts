import { RequestHandler, Router } from 'express';
import { TemplaesController } from './controller.js';
import multer from 'multer';
import routes from '@src/config/routes.confg.js';
import authenticate from '@src/middlewares/authenticate.js';

const router = Router();
const templatesController = new TemplaesController();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router
    .route(routes.CURD_TEMPLATES)
    .post(
        authenticate as RequestHandler,
        upload.single('file'),
        templatesController.create as any
    );

router.route(routes.CURD_TEMPLATES).get(templatesController.findAll);

router
    .route(routes.CURD_TEMPLATES + '/:templateId')
    .get(authenticate as RequestHandler, templatesController.findOne);

router
    .route('/user' + routes.CURD_TEMPLATES + '/:authorId')
    .get(authenticate as RequestHandler, templatesController.getUserTemplates);

router
    .route('/theme' + routes.CURD_TEMPLATES)
    .get(authenticate as RequestHandler, templatesController.getByTheme);

router
    .route(routes.CURD_TEMPLATES + '/:templateId')
    .put(
        authenticate as RequestHandler,
        upload.single('file'),
        templatesController.update as any
    );

router
    .route(routes.CURD_TEMPLATES + '/:templateId')
    .delete(authenticate as RequestHandler, templatesController.remove as any);

router.route(routes.SEARCH_TEMPLATES).get(templatesController.search);

router.route(routes.THEMES).get(templatesController.getThemes);

router
    .route(routes.REMOVE_TEMPLATE_IMG)
    .put(authenticate as RequestHandler, templatesController.removeImage);

export default router;
