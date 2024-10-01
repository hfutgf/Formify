import { UserQuery } from './query.js';
import type { Request, Response } from 'express';

export class UserController {
    userQuery: UserQuery;

    constructor() {
        this.userQuery = new UserQuery();
    }
}
