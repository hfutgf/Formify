import authenticate from '@src/middlewares/authenticate.js';
import { Router } from 'express';
import { UserController } from './controller.js';

const router = Router();
const userController = new UserController();


export default router;
