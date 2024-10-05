import { Role, Template, Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { UserQuery } from '../user/query.js';
import { modelNames } from '@src/config/models.config.js';

export class TemplatesQuery extends UserQuery {
    constructor() {
        super();
    }

    createTemplate = async (body: Template, authorId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .insert({ ...body, authorId })
            .select('*')
            .single();

        if (error) {
            console.log(error);
            throw new Error('Error creating template');
        }
        return data;
    };

    findAllTemplate = async () => {
        const { data } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*');
        return data ? data : null;
    };

    findOneTemplate = async (templateId: number) => {
        const { data } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .eq('id', templateId)
            .single();
        return data ? data : null;
    };

    updateTemplate = async (
        templateId: number,
        userId: number,
        body: Template
    ) => {
        const user = (await this.getById(userId)) as Users;
        const template = (await this.findOneTemplate(templateId)) as Template;

        if (user.role === Role.admin || userId === template.authorId) {
            const { data } = await this.supabase
                .from(modelNames.TEMPLATES)
                .update(body)
                .eq('id', templateId)
                .select('*')
                .single();

            return data ? data : null;
        }
        return null;
    };

    removeTemplate = async (templateId: number, userId: number) => {
        const user = (await this.getById(userId)) as Users;
        const template = (await this.findOneTemplate(templateId)) as Template;

        if (user.role === Role.admin || userId === template.authorId) {
            const { data } = await this.supabase
                .from(modelNames.TEMPLATES)
                .delete()
                .eq('id', templateId)
                .select('*')
                .single();

            return data ? data : null;
        }
        return null;
    };

    searchTemplate = async (title: string) => {
        const { data } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .ilike('title', `%${title}%`);

        return data ? data : null;
    };
}
