import { Option, Question } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class QuestionQuery extends CommonQuery {
    constructor() {
        super();
    }

    createQuestion = async (templateId: number, body: Question) => {
        const questions = await this.getQuestionsByTemplateId(templateId);
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .insert({ ...body, templateId, order: questions.length + 1 })
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }

        return data;
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
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }

        return data;
    };

    updateQuestionsOrders = async (ids: number[]) => {
        const questions: Question[] = [];

        for (let i = 0; i < ids.length; i++) {
            const { data, error } = await this.supabase
                .from(modelNames.QUESTIONS)
                .update({ order: i + 1, createdAt: new Date() })
                .eq('id', ids[i])
                .select('*')
                .single();
            questions.push(data);

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
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }

        return data;
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
            .select('*')
            .single();

        if (error) {
            throw new Error(error.message);
        }
        return data;
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
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
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
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }

        return data;
    };
}
