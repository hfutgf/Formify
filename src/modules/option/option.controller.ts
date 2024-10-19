import { OptionQuery } from './option.query.js';
import { Request, Response } from 'express';

export class OptionController {
    optionQuery = new OptionQuery();
    updateOptions = async (req: Request, res: Response) => {
        try {
            const { optionId } = req.params;
            const body = req.body;
            const option = await this.optionQuery.updateOption(
                Number(optionId),
                body
            );
            res.status(200).json(option);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updateOptionsOrders = async (req: Request, res: Response) => {
        try {
            const { ids } = req.body;
            const { questionId } = req.params;
            const options = await this.optionQuery.updateOptionsOrders(
                ids,
                Number(questionId)
            );
            res.status(200).json(options);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    removeOption = async (req: Request, res: Response) => {
        try {
            const { optionId } = req.params;
            const option = await this.optionQuery.removeOption(
                Number(optionId)
            );
            res.status(200).json(option);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getOptions = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const options = await this.optionQuery.getOptionsByQuestionId(
                Number(questionId)
            );
            res.status(201).json(options);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    createOption = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const body = req.body;
            const option = await this.optionQuery.createQuestionOption({
                ...body,
                questionId,
            });
            res.status(201).json(option);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
