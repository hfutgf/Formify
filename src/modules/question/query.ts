import { Option, Question } from '@prisma/client';
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

    createQuestionOption = async (body: Option) => {
        const {
            data: getOptionsByQuestionId,
            error: errorOptionsByQuestionId,
        } = await this.supabase
            .from(modelNames.OPTIONS)
            .select('*')
            .eq('questionId', body.questionId);

        if (errorOptionsByQuestionId) {
            throw new Error(errorOptionsByQuestionId.message);
        }

        const { data, error } = await this.supabase
            .from(modelNames.OPTIONS)
            .insert({ ...body, order: getOptionsByQuestionId.length + 1 })
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getOptionsByQuestionId = async (questionId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.OPTIONS)
            .select('*')
            .eq('questionId', questionId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    };

    updateOption = async (optionId: number, body: Question) => {
        const { data, error } = await this.supabase
            .from(modelNames.OPTIONS)
            .update(body)
            .eq('id', optionId)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    updateOptionsOrders = async (ids: number[], questionId: number) => {
        const updates = ids.map((id, index) => ({
            id,
            order: index + 1,
            questionId,
            createdAt: new Date(),
        }));

        const { data, error } = await this.supabase
            .from(modelNames.OPTIONS)
            .upsert(updates, { onConflict: 'id' })
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return data;
    };

    removeOption = async (optionId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.OPTIONS)
            .delete()
            .eq('id', optionId)
            .select('*');
        if (error) {
            throw new Error(error.message);
        }

        return data[0];
    };
}
