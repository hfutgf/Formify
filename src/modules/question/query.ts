import { Option, Question } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class QuestionQuery extends CommonQuery {
    constructor() {
        super();
    }

    createQuestion = async (templateId: number, body: Question) => {
        const questions = await this.getQuestionsByTemplateId(templateId);
        const { data } = await this.supabase
            .from(modelNames.QUESTIONS)
            .insert({ ...body, templateId, order: questions?.length })
            .select('*')
            .single();

        return data ? data : null;
    };

    getQuestionsByTemplateId = async (templateId: number) => {
        const { data } = await this.supabase
            .from(modelNames.QUESTIONS)
            .select('*')
            .eq('templateId', templateId);

        return data ? data : null;
    };

    updatedQuestion = async (questionId: number, body: Question) => {
        const { data } = await this.supabase
            .from(modelNames.QUESTIONS)
            .update(body)
            .eq('id', questionId)
            .select('*')
            .single();

        return data ? data : null;
    };

    removeQuestion = async (questionId: number) => {
        const { data } = await this.supabase
            .from(modelNames.QUESTIONS)
            .delete()
            .eq('id', questionId)
            .select('*')
            .single();

        return data ? data : null;
    };

    createQuestionOption = async (body: Option) => {
        const { data } = await this.supabase
            .from(modelNames.OPTIONS)
            .insert(body)
            .select('*')
            .single();
        return data ? data : null;
    };

    getOptionsByQuestionId = async (questionId: number) => {
        const { data } = await this.supabase
            .from(modelNames.OPTIONS)
            .select('*')
            .eq('questionId', questionId);
        return data ? data : null;
    };

    updateOption = async (optionId: number, body: Question) => {
        const { data } = await this.supabase
            .from(modelNames.OPTIONS)
            .update(body)
            .eq('id', optionId)
            .select('*')
            .single();
        return data ? data : null;
    };
}
