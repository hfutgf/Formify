import { Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import argon from 'argon2';

export class UserQuery extends CommonQuery {
    getByEmail = async (email: string) => {
        const { data } = await this.supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
        return data ? data : null;
    };

    getById = async (id: number) => {
        const { data } = await this.supabase
            .from('users')
            .select('*')
            .eq('id', Number(id))
            .single();
        return data ? data : null;
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
            .from('users')
            .insert({ ...body, password: hashPassword })
            .select('*')
            .single();
        if (error) {
            console.log(error);
            throw new Error(`${error}`);
        }
        return data ? data : null;
    };
}
