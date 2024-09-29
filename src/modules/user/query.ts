import { Users } from '@prisma/client';
import { Common } from '../common/query.js';
import argon from 'argon2';

export class UserQuery extends Common {
    constructor() {
        super();
    }

    getByEmail = async (email: string) => {
        const user = this.prisma.users.findFirst({ where: { email } });
        return user;
    };

    create = async (body: Users) => {
        const isExists = await this.getByEmail(body.email);
        if (isExists) {
            throw new Error('User already exists!');
        }
        const hashPassword = await argon.hash(body.password);
        const user = await this.prisma.users.create({
            data: {
                ...body,
                password: hashPassword,
            },
        });
        return user;
    };
}
