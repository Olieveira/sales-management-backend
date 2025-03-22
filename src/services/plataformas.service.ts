import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PlataformasService {

    static async getAll() {
        return prisma.plataformaVenda.findMany();
    };
}