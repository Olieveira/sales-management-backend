import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class StatusService {

    static async getAll() {
        return prisma.statusVenda.findMany();
    }

}