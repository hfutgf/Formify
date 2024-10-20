import { TemplateLike } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class LikeQuery extends CommonQuery {
    constructor() {
        super();
    }

    createLike = async (body: TemplateLike) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATE_LIKES)
            .insert(body)
            .select('*');
        if (error) throw new Error(error.message);
        return data[0];
    };

    deleteLike = async (likeId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATE_LIKES)
            .delete()
            .eq('id', likeId)
            .select('*');
        if (error) throw new Error(error.message);
        return data[0];
    };

    getLikes = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATE_LIKES)
            .select('*')
            .eq('templateId', templateId);
        if (error) throw new Error(error.message);
        return data;
    };

    getLike = async (templateId: number, userId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.TEMPLATE_LIKES)
            .select('*')
            .eq('templateId', templateId)
            .eq('userId', userId);
        if (error) throw new Error(error.message);
        return data[0];
    };
}
