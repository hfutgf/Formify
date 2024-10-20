import type { Response, Request } from 'express';
import { CommentQuery } from './comment.query.js';

export class CommentController {
    commentQuery = new CommentQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const comment = await this.commentQuery.createComment(body);
            res.status(201).json(comment);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getAll = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const comments = await this.commentQuery.getComments(
                Number(templateId)
            );
            res.status(200).json(comments);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { commentId } = req.params;
            const comment = await this.commentQuery.deleteComment(
                Number(commentId)
            );
            res.status(200).json(comment);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    createCommentLike = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const comment = await this.commentQuery.createCommentLike(body);
            res.status(200).json(comment);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    deleteCommentLike = async (req: Request, res: Response) => {
        try {
            const { likeId } = req.params;
            const comment = await this.commentQuery.deleteCommentLike(
                Number(likeId)
            );
            res.status(200).json(comment);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getCommentLikes = async (req: Request, res: Response) => {
        try {
            const { commentId } = req.params;
            const comments = await this.commentQuery.getCommentLikes(
                Number(commentId)
            );
            res.status(200).json(comments);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
