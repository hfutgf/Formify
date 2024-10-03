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

export default router;
