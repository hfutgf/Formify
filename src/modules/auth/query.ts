import { Users } from '@prisma/client';
import { UserQuery } from '../user/query.js';
import jwt from 'jsonwebtoken';

export class AuthQuery extends UserQuery {
    JWT_SECRET: string;
    constructor() {
        super();
        this.JWT_SECRET = process.env.JWT_SECRET!;
    }

    register = async (body: Users) => {
        const { password, ...user } = await this.create(body);
        const tokens = this.issueToken(user.id);
        return {
            user,
            ...tokens,
        };
    };

    issueToken = (userId: number) => {
        const data = {
            id: userId,
        };
        const refreshToken = jwt.sign(data, this.JWT_SECRET, {
            expiresIn: '1d',
        });
        const accessToken = jwt.sign(data, this.JWT_SECRET, {
            expiresIn: '3h',
        });

        return {
            refreshToken,
            accessToken,
        };
    };
}
