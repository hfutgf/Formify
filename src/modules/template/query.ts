import { Role, Template, Theme, Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { UserQuery } from '../user/query.js';
import { modelNames } from '@src/config/models.config.js';

export class TemplatesQuery extends UserQuery {
    constructor() {
        super();
    }

    createTemplate = async (
        body: Template,
        authorId: number
    ): Promise<Template> => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .insert({ ...body, authorId })
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
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
            .eq('id', templateId);
        if (error) {
            throw new Error(error.message);
        }
        return data[0];
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
                .select('*');
            if (error) {
                throw new Error(error.message);
            }
            return data[0];
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
                .select('*');
            if (error) {
                throw new Error(error.message);
            }
            return data[0];
        }
        return null;
    };

    searchTemplate = async (text: string) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .or(`title.ilike.%${text}%,description.ilike.%${text}%`);

        const { data: commentData, error: commentError } = await this.supabase
            .from(modelNames.COMMENTS)
            .select('templateId')
            .ilike('content', `%${text}%`);

        if (commentError) {
            throw new Error(commentError.message);
        }

        if (!commentData || commentData.length === 0) {
            return data;
        }

        const templateIds = commentData.map((comment) => comment.templateId);
        const { data: templateData, error: templateError } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .in('id', templateIds);

        if (templateError) {
            throw new Error(templateError.message);
        }

        if (error) {
            throw new Error(error?.message);
        }
        return [...templateData, ...data];
    };

    removeTemplateImage = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .update({ imageUrl: null })
            .eq('id', templateId)
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    userTemplates = async (authorId: number) => {
        const themes = Object.values(Theme);
        const templates = [];
        for (let i = 0; i < themes.length; i++) {
            const { data, error } = await this.supabase
                .from(modelNames.TEMPLATES)
                .select('*')
                .eq('authorId', authorId)
                .eq('theme', themes[i]);

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

    usersFilterByTheme = async (theme: string) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATES)
            .select('*')
            .eq('theme', theme);
        if (error) {
            throw new Error(error.message);
        }
        return {
            theme,
            data,
        };
    };
}
