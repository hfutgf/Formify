import { UserQuery } from './query.js';
import type { Request, Response } from 'express';

export class UserController {
    userQuery: UserQuery;

    constructor() {
        this.userQuery = new UserQuery();
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        const data = await this.userQuery.getAll();
        res.status(200).json(data);
    };
}
