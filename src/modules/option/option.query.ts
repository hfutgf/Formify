import { modelNames } from '@src/config/models.config.js';
import { CommonQuery } from '../common/query.js';
import { Option, Question } from '@prisma/client';

export class OptionQuery extends CommonQuery {
    constructor() {
        super();
    }
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
