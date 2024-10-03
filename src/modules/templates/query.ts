import { Template } from '@prisma/client';
import { CommonQuery } from '../common/query.js';

export class TemplatesQuery extends CommonQuery {
    constructor() {
        super();
    }

    create = async (body: Template, authorId: number) => {
        const { data, error } = await this.supabase
            .from('templates')
            .insert({ ...body, authorId })
            .select('*')
            .single();

        if (error) {
            console.log(error);
            throw new Error('Error creating template');
        }
        return data;
    };
}
