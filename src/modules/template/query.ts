import { Role, Template, Theme, Users } from '@prisma/client';
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
            throw new Error(error.message);
        }
        return data;
    };

    findTemplatesForThemes = async () => {
        const themes = Object.values(Theme);
        const templates = [];
        for (let i = 0; i < themes.length; i++) {
            const { data, error } = await this.supabase
                .from(modelNames.TEMPLATES)
                .select('*')
                .eq('theme', themes[i])
                .eq('isPublic', true);
            if (data?.length) {
                templates.push({
                    theme: themes[i],
                    data,
                });
            }
            if (error) {
                throw new Error(error.message);
            }
        }
        return templates;
    };

    findOneTemplate = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .eq('id', templateId)
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    };

    updateTemplate = async (
        templateId: number,
        userId: number,
        body: Template
    ) => {
        const user = (await this.getById(userId)) as Users;
        const template = (await this.findOneTemplate(templateId)) as Template;

        if (user.role === Role.ADMIN || userId === template.authorId) {
            const { data, error } = await this.supabase
                .from(modelNames.TEMPLATES)
                .update({ ...body, updatedAt: new Date() })
                .eq('id', templateId)
                .select('*')
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        }
        return null;
    };

    removeTemplate = async (templateId: number, userId: number) => {
        const user = (await this.getById(userId)) as Users;
        const template = (await this.findOneTemplate(templateId)) as Template;

        if (user.role === Role.ADMIN || userId === template.authorId) {
            const { data, error } = await this.supabase
                .from(modelNames.TEMPLATES)
                .delete()
                .eq('id', templateId)
                .select('*')
                .single();
            if (error) {
                throw new Error(error.message);
            }
            console.log(error);
            return data;
        }
        return null;
    };

    searchTemplate = async (title: string) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .ilike('title', `%${title}%`);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    };

    removeTemplateImage = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .update({ imageUrl: null })
            .eq('id', templateId)
            .select('*')
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    };
}
