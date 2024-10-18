import { Form, Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class FormQuery extends CommonQuery {
    constructor() {
        super();
    }

    createForm = async (
        body?: Omit<Form, 'id' | 'submittedAt'>
    ): Promise<Form> => {
        const { data, error } = await this.supabase
            .from(modelNames.FORMS)
            .insert(body)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    removeForm = async (formId: number): Promise<Form> => {
        const { data, error } = await this.supabase
            .from(modelNames.FORMS)
            .delete()
            .eq('id', formId)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getByTemplate = async (templateId: number): Promise<Form[]> => {
        const { data, error } = await this.supabase
            .from(modelNames.FORMS)
            .select('*')
            .eq('templateId', templateId);

        if (error) {
            throw new Error(error.message);
        }
        return data;
    };
}
