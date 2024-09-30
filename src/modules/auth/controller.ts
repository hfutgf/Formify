import { Users } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthQuery } from './query.js';
import Joi from 'joi';

export class AuthController {
    REFRESH_TOKEN = 'refreshToken';
    authQuery: AuthQuery;
    constructor() {
        this.authQuery = new AuthQuery();
    }
    register = async (req: Request, res: Response): Promise<any> => {
        try {
            const { error } = this.validateUser(req.body as Users);
            if (error) {
                return res
                    .status(400)
                    .json({ message: error.details[0].message });
            }
            const body = req.body as Users;
            const { refreshToken, ...data } =
                await this.authQuery.register(body);
            res.cookie(this.REFRESH_TOKEN, refreshToken, {
                httpOnly: true,
                maxAge: 3 * 86400,
            });
            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    login = async (req: Request, res: Response): Promise<any> => {
        try {
            const body = req.body;
            const { refreshToken, ...data } = await this.authQuery.login(body);
            res.cookie(this.REFRESH_TOKEN, refreshToken, {
                httpOnly: true,
                maxAge: 3 * 86400,
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    private validateUser = (data: Users) => {
        const schema = Joi.object({
            fullName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string()
                .min(8)
                .message('Minimum password length is 8!')
                .required(),
        });
        return schema.validate(data);
    };
}
