import { PrismaClient } from '@prisma/client';

export class UserQuery {
    prisma: PrismaClient = new PrismaClient();
    async getAll() {
        const users = await this.prisma.user.findMany();
        return users;
    }
}
