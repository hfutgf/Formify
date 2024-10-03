import { Response } from 'express';
import { CommonController } from '../common/controller.js';
import { TemplatesQuery } from './query.js';
import IRequest from '@src/types/request.type.js';

export class TemplaesController extends CommonController {
    templatesQuery = new TemplatesQuery();

    create = async (req: IRequest, res: Response): Promise<any> => {
        try {
            const imageUrl = await this.uploadToFireBase(req, 'templates');
            const body = { ...req.body, imageUrl };
            const template = await this.templatesQuery.create(body, req.userId);
            return res.status(201).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
