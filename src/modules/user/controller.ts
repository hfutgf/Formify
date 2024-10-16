import { UserQuery } from './query.js';
import type { Request, Response } from 'express';

export class UserController {
    userQuery = new UserQuery();

    getUserById = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await this.userQuery.getById(Number(userId));
            res.status(200).json(user);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
