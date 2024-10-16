import { Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import argon from 'argon2';
import { modelNames } from '@src/config/models.config.js';

export class UserQuery extends CommonQuery {
    getByEmail = async (email: string) => {
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .select('*')
            .eq('email', email);

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getById = async (id: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .select('*')
            .eq('id', Number(id));
        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    create = async (body: Users): Promise<Users | null> => {
        const isExists = await this.getByEmail(body.email);
        if (isExists) {
            throw new Error(
                'User already exists! Please create a different email address.'
            );
        }
        const hashPassword = await argon.hash(body.password);

        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .insert({ ...body, password: hashPassword })
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };
}
