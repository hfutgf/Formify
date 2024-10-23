import { Role, user_status, Users } from '@prisma/client';
import { CommonQuery } from '../common/query.js';
import argon from 'argon2';
import { modelNames } from '@src/config/models.config.js';

export class UserQuery extends CommonQuery {
    getByEmail = async (email: string): Promise<Users> => {
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .select('*')
            .eq('email', email);

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getById = async (id: number): Promise<Users> => {
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

    updateUser = async (
        userId: number,
        body: Users & { oldPassword?: string }
    ) => {
        const user = await this.getById(userId);
        const hashPassword = body.password
            ? await argon.hash(body.password)
            : user.password;
        if (body.oldPassword) {
            const isVerifyPassword = await argon.verify(
                user.password,
                body.oldPassword
            );
            if (!isVerifyPassword) {
                throw new Error('Incorrect password');
            }
        }

        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .update({ ...user, ...body, password: hashPassword })
            .eq('id', userId)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getAllUsers = async (adminId: number) => {
        const admin = await this.getById(adminId);
        if (admin.role !== Role.ADMIN) {
            throw new Error('You are not an administrator');
        }
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .select('*');

        if (error) throw new Error(error.message);
        return data;
    };

    getUsersByRole = async (role: 'ADMIN' | 'USER', adminId: number) => {
        const admin = await this.getById(adminId);
        if (admin.role !== Role.ADMIN) {
            throw new Error('You are not an administrator');
        }
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .select('*')
            .eq('role', role);

        if (error) throw new Error(error.message);
        return data;
    };

    deleteUser = async (adminId: number, userId: number) => {
        const admin = await this.getById(adminId);
        if (admin.role !== Role.ADMIN) {
            throw new Error('You are not an administrator');
        }
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .delete()
            .eq('id', userId)
            .select('*');

        if (error) throw new Error(error.message);
        return data[0];
    };

    updateFromAdmin = async (
        adminId: number,
        userId: number,
        body: { status?: user_status; role?: Role }
    ) => {
        const admin = await this.getById(adminId);
        if (admin.role !== Role.ADMIN) {
            throw new Error('You are not an administrator');
        }
        const { data, error } = await this.supabase
            .from(modelNames.USERS)
            .update(body)
            .eq('id', userId)
            .select('*');

        if (error) throw new Error(error.message);
        return data[0];
    };
}
