import { Request, Response } from 'express';
import { FormQuery } from './form.query.js';

export class FormController {
    formQuery = new FormQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const form = await this.formQuery.createForm(body);
            res.status(201).json(form);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const { formId } = req.params;
            const form = await this.formQuery.removeForm(Number(formId));
            res.status(200).json(form);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getByTemplate = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const forms = await this.formQuery.getByTemplate(
                Number(templateId)
            );
            res.status(200).json(forms);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
