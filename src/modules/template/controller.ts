import { Response, Request } from 'express';
import { CommonController } from '../common/controller.js';
import { TemplatesQuery } from './query.js';
import IRequest from '@src/types/request.type.js';
import { Theme } from '@prisma/client';

export class TemplaesController extends CommonController {
    templatesQuery = new TemplatesQuery();

    create = async (req: IRequest, res: Response): Promise<any> => {
        try {
            const imageUrl = await this.uploadToFireBase(req, 'templates');
            let body = { ...req.body, imageUrl };
            if (!imageUrl) {
                body = req.body;
            }
            const template = await this.templatesQuery.createTemplate(
                body,
                req.userId
            );
            return res.status(201).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const templates =
                await this.templatesQuery.findTemplatesForThemes();
            return res.status(200).json(templates);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const template = await this.templatesQuery.findOneTemplate(
                Number(templateId)
            );
            return res.status(200).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    update = async (req: IRequest, res: Response): Promise<any> => {
        try {
            const { templateId } = req.params;
            const imageUrl = await this.uploadToFireBase(req, 'templates');
            let body = { ...req.body, imageUrl };
            if (!imageUrl) {
                body = req.body;
            }
            const userId = req.userId;
            const updatedTemplate = await this.templatesQuery.updateTemplate(
                Number(templateId),
                userId,
                body
            );
            if (!updatedTemplate) {
                return res.status(400).json(updatedTemplate);
            }
            return res.status(200).json(updatedTemplate);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    remove = async (req: IRequest, res: Response): Promise<any> => {
        try {
            const { templateId } = req.params;
            const userId = req.userId;
            const removeTemplate = await this.templatesQuery.removeTemplate(
                Number(templateId),
                userId
            );

            if (!removeTemplate) {
                return res.status(400).json(removeTemplate);
            }
            return res.status(200).json(removeTemplate);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    search = async (req: Request, res: Response) => {
        try {
            const { title } = req.query as { title: string };
            const template = await this.templatesQuery.searchTemplate(title);
            if (!template) {
                return res.status(400).json(template);
            }
            return res.status(200).json(template);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json(e.message);
        }
    };

    getThemes = async (req: Request, res: Response) => {
        const themes = Object.values(Theme);
        return res.status(200).json(themes);
    };
}
