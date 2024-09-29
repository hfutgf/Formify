import { Users } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthQuery } from './query.js';

export class AuthController {
    REFRESH_TOKEN = 'refreshToken';
    authQuery: AuthQuery;
    constructor() {
        this.authQuery = new AuthQuery();
    }
    register = async (req: Request, res: Response): Promise<any> => {
        // try {
        const body = req.body as Users;
        const { refreshToken, ...data } = await this.authQuery.register(body);
        console.log(data);
        res.cookie(this.REFRESH_TOKEN, refreshToken, {
            httpOnly: true,
            maxAge: 3 * 86400,
        });
        return res.status(201).json(data);
        // } catch (error) {
        //     return res.status(500).json(error);
        // }
    };
}
