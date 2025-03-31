import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class FornecedorService {
    static async getAll() {
        return prisma.fornecedor.findMany();
    }

    static async getById(idFornecedor: number) {
        return prisma.fornecedor.findUnique({ where: { idFornecedor } });
    }

    static async create(data: any) {
        return prisma.fornecedor.create({ data });
    }

    static async update(idFornecedor: number, data: any) {
        return prisma.fornecedor.update({ where: { idFornecedor }, data });
    }

    static async delete(idFornecedor: number) {
        return prisma.fornecedor.delete({ where: { idFornecedor } });
    }
}
