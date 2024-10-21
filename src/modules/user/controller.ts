import { UserQuery } from './query.js';
import type { Request, Response } from 'express';

export class UserController {
    userQuery = new UserQuery();

    getUserById = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await this.userQuery.getById(Number(userId));
            res.status(200).json(user);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const body = req.body;
            const user = await this.userQuery.updateUser(Number(userId), body);
            res.status(200).json(user);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const { adminId } = req.params;
            const users = await this.userQuery.getAllUsers(Number(adminId));
            res.status(200).json(users);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    getUsersByRole = async (req: Request, res: Response) => {
        try {
            const { adminId } = req.params;
            const { role } = req.query as { role: 'USER' | 'ADMIN' };
            const users = await this.userQuery.getUsersByRole(
                role,
                Number(adminId)
            );
            res.status(200).json(users);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { adminId, userId } = req.params;
            const user = await this.userQuery.deleteUser(
                Number(adminId),
                Number(userId)
            );
            res.status(200).json(user);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };

    updateFromAdmin = async (req: Request, res: Response) => {
        try {
            const { adminId, userId } = req.params;
            const body = req.body;
            const user = await this.userQuery.updateFromAdmin(
                Number(adminId),
                Number(userId),
                body
            );
            res.status(200).json(user);
        } catch (error) {
            const e = error as Error;
            res.status(500).json(e.message);
        }
    };
}
