import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class VendaService {
    static async getAll() {
        return prisma.venda.findMany();
    }

    static async getById(idVenda: number) {
        return prisma.venda.findUnique({ where: { idVenda } });
    }

    static async create(data: any) {
        return prisma.venda.create({ data });
    }

    static async update(idVenda: number, data: any) {
        return prisma.venda.update({ where: { idVenda }, data });
    }

    static async delete(idVenda: number) {
        return prisma.venda.delete({ where: { idVenda } });
    }
}