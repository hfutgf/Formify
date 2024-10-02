import { Users } from '@prisma/client';
import { Common } from '../common/query.js';
import argon from 'argon2';

export class UserQuery extends Common {
    getByEmail = async (email: string) => {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
        if (error) {
            console.log(error);
        }
        return data ? data : null;
    };

    create = async (body: Users): Promise<Users | null> => {
        const { data: isExists } = await this.getByEmail(body.email);
        if (isExists) {
            throw new Error(
                'User already exists! Please create a different email address.'
            );
        }
        const hashPassword = await argon.hash(body.password);

        const { data, error } = await this.supabase
            .from('users')
            .insert({ ...body, password: hashPassword })
            .select('*');

        if (error) {
            console.log(error);
            throw new Error(`${error}`);
        }
        return data ? data[0] : null;
    };
}
