import { Request, Response } from 'express';
import { QuestionQuery } from './query.js';

export class QuestionController {
    questionQuery = new QuestionQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const { templateId } = req.params;
            const question = await this.questionQuery.createQuestion(
                Number(templateId),
                body
            );
            return question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json(e.message);
        }
    };

    getAllByTemplateId = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const questions = await this.questionQuery.getQuestionsByTemplateId(
                Number(templateId)
            );
            return questions
                ? res.status(200).json(questions)
                : res.status(400).json(questions);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json(e.message);
        }
    };

    updated = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const body = req.body;

            const question = await this.questionQuery.updatedQuestion(
                Number(questionId),
                body
            );

            return question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json(e.message);
        }
    };

    remove = async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const question = await this.questionQuery.removeQuestion(
                Number(questionId)
            );
            return question
                ? res.status(200).json(question)
                : res.status(400).json(question);
        } catch (error) {
            const e = error as Error;
            return res.status(500).json(e.message);
        }
    };
}
