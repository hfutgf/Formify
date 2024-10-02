import { Users } from '@prisma/client';
import { UserQuery } from '../user/query.js';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ILoginBody } from '@src/types/auth.types.js';
import argon from 'argon2';

export class AuthQuery extends UserQuery {
    private JWT_SECRET: string;
    constructor() {
        super();
        this.JWT_SECRET = process.env.JWT_SECRET!;
    }

    register = async (body: Users) => {
        const { password, ...user } = (await this.create(body))!;
        const tokens = this.issueToken(user.id);
        return {
            user,
            ...tokens,
        };
    };

    login = async (body: ILoginBody) => {
        const user = await this.getByEmail(body.email);
        if (!user) {
            throw new Error('User not found!');
        }
        const { password, ...data } = user;
        const verifyPassword = await argon.verify(password, body.password);
        if (!verifyPassword) {
            throw new Error('Passwrod is wrong!');
        }
        const tokens = this.issueToken(user.id);
        return {
            data,
            ...tokens,
        };
    };

    private issueToken = (userId: number) => {
        const data = {
            id: userId,
        };
        const refreshToken = jwt.sign(data, this.JWT_SECRET, {
            expiresIn: '7d',
        });
        const accessToken = jwt.sign(data, this.JWT_SECRET, {
            expiresIn: '1d',
        });

        return {
            refreshToken,
            accessToken,
        };
    };

    getAccessToken = (refreshToken: string) => {
        try {
            const isValid = jwt.verify(refreshToken, this.JWT_SECRET);
            const { id } = isValid as JwtPayload;
            const tokens = this.issueToken(id);
            return tokens;
        } catch (error) {
            throw new Error('Refresh token is wrong!');
        }
    };
}
