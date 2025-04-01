import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

prismaClient.$connect().then(() => {
    console.log('Connected to the database');
    
}).catch((error) => {
  console.error('Error connecting to the database:', error);
})

export const db = prismaClient

