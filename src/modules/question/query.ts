import { Question } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class QuestionQuery extends CommonQuery {
    constructor() {
        super();
    }

    createQuestion = async (templateId: number, body: Question) => {
        const { data, error } = await this.supabase
            .from(modelNames.QUESTIONS)
            .insert({ ...body, templateId })
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
}
