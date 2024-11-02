import { Response, Request } from 'express';
import { CommonController } from '../common/controller.js';
import { TemplatesQuery } from './query.js';
import IRequest from '@src/types/request.type.js';
import { Theme } from '@prisma/client';
import { FormQuery } from '../form/form.query.js';

export class TemplaesController extends CommonController {
    templatesQuery = new TemplatesQuery();
    formQuery = new FormQuery();

    create = async (req: IRequest, res: Response) => {
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

            res.status(201).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    findAll = async (req: Request, res: Response) => {
        try {
            const templates =
                await this.templatesQuery.findTemplatesForThemes();
            res.status(200).json(templates);
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
            res.status(200).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    update = async (req: IRequest, res: Response) => {
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
                res.status(400).json(updatedTemplate);
            }
            res.status(200).json(updatedTemplate);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    remove = async (req: IRequest, res: Response) => {
        try {
            const { templateId } = req.params;
            const userId = req.userId;
            const removeTemplate = await this.templatesQuery.removeTemplate(
                Number(templateId),
                userId
            );

            res.status(200).json(removeTemplate);
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
                res.status(400).json(template);
            }
            res.status(200).json(template);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getThemes = async (req: Request, res: Response) => {
        const themes = Object.values(Theme);
        res.status(200).json(themes);
    };

    removeImage = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const tempalte = await this.templatesQuery.removeTemplateImage(
                Number(templateId)
            );
            res.status(200).json(tempalte);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getUserTemplates = async (req: Request, res: Response) => {
        try {
            const { authorId } = req.params;
            const tempaltes = await this.templatesQuery.userTemplates(
                Number(authorId)
            );
            res.status(200).json(tempaltes);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getByTheme = async (req: Request, res: Response) => {
        try {
            const { theme } = req.query as { theme: string };
            const tempaltes =
                await this.templatesQuery.usersFilterByTheme(theme);
            res.status(200).json(tempaltes);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getTemplates = async (req: Request, res: Response) => {
        try {
            const { adminId } = req.params;
            const tempaltes = await this.templatesQuery.getTemplates(
                Number(adminId)
            );
            res.status(200).json(tempaltes);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
