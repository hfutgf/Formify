import { PrismaClient } from '@prisma/client';

export class Common {
    prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
}
