import { Request, Response } from 'express';
import { LikeQuery } from './like.query.js';

export class LikeController {
    likeQuery = new LikeQuery();

    create = async (req: Request, res: Response) => {
        try {
            const body = req.body;
            const like = await this.likeQuery.createLike(body);
            res.status(201).json(like);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { likeId } = req.params;
            const like = await this.likeQuery.deleteLike(Number(likeId));
            res.status(200).json(like);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getLikes = async (req: Request, res: Response) => {
        try {
            const { templateId } = req.params;
            const likes = await this.likeQuery.getLikes(Number(templateId));
            res.status(200).json(likes);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
