import { Question } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class QuestionQuery extends CommonQuery {
    constructor() {
        super();
    }

    getQuesitonById = async (id: number): Promise<Question> => {
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .select('*')
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }

        return data[0];
    };

    createQuestion = async (templateId: number, body: Question) => {
        const questions = await this.getQuestionsByTemplateId(templateId);
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .insert({ ...body, templateId, order: questions.length + 1 })
            .select('*');
        if (error) {
            throw new Error(error.message);
        }

        return data[0];
    };

    getQuestionsByTemplateId = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .select('*')
            .eq('templateId', templateId);
        if (error) {
            throw new Error(error.message);
        }

        return data;
    };

    updatedQuestion = async (questionId: number, body: Question) => {
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .update(body)
            .eq('id', questionId)
            .select('*');
        if (error) {
            throw new Error(error.message);
        }

        return data[0];
    };

    updateQuestionsOrders = async (ids: number[]) => {
        const questions: Question[] = [];

        for (let i = 0; i < ids.length; i++) {
            const { data, error } = await this.supabase
                .from(modelNames.QUESTIONS)
                .update({ order: i + 1, createdAt: new Date() })
                .eq('id', ids[i])
                .select('*');
            if (data?.length) {
                questions.push(data[0]);
            }
            if (error) {
                throw new Error(error.message);
            }
        }
        return questions;
    };

    removeQuestion = async (questionId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .delete()
            .eq('id', questionId)
            .select('*');
        if (error) {
            throw new Error(error.message);
        }

        return data[0];
    };
}
