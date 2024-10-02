import { PrismaClient } from '@prisma/client';
import supabase from '@src/config/supabase.config.js';
import { SupabaseClient } from '@supabase/supabase-js';

export class Common {
    prisma: PrismaClient;
    supabase: SupabaseClient<any, 'public', any> = supabase;
    constructor() {
        this.prisma = new PrismaClient();
    }
}
