import { Request, Response } from 'express';
import { AnswerQuery } from './answer.query.js';

export class AnswerController {
    answerQuery = new AnswerQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const answer = await this.answerQuery.createAnswer(body);
            res.status(201).json(answer);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getOptions = async (req: Request, res: Response) => {
        try {
            const { answerId } = req.params;
            const options = await this.answerQuery.getOptionsByAnswerId(
                Number(answerId)
            );
            res.status(200).json(options);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    removeAnswer = async (req: Request, res: Response) => {
        try {
            const { answerId } = req.params;
            const answer = await this.answerQuery.removeAnswer(
                Number(answerId)
            );
            res.status(200).json(answer);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updateAnswer = async (req: Request, res: Response) => {
        try {
            const { answerId } = req.params;
            const body = req.body;
            const answer = await this.answerQuery.updateAnswer(
                Number(answerId),
                body
            );
            res.status(200).json(answer);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updateOption = async (req: Request, res: Response) => {
        try {
            const { optionId } = req.params;
            const body = req.body;
            const answer = await this.answerQuery.updateAnswerOption(
                Number(optionId),
                body
            );
            res.status(200).json(answer);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
