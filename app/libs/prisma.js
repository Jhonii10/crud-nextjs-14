import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

console.log('prisma', prisma.task.findMany())