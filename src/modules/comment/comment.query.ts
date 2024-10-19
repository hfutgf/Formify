import { Comment } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import { modelNames } from '@src/config/models.config.js';

export class CommentQuery extends CommonQuery {
    constructor() {
        super();
    }

    createComment = async (body: Comment): Promise<Comment> => {
        const { data, error } = await this.supabase
            .from(modelNames.COMMENTS)
            .insert(body)
            .select('*');
        console.log(error);
        if (error) throw new Error(error.message);
        return data[0];
    };

    getComments = async (templateId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.COMMENTS)
            .select('*')
            .eq('templateId', templateId);
        if (error) throw new Error(error.message);
        return data;
    };

    deleteComment = async (commentId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.COMMENTS)
            .delete()
            .eq('id', commentId)
            .select('*');
        if (error) throw new Error(error.message);
        return data[0];
    };
}
