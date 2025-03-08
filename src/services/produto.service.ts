import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProdutoService {

    static async getAll() {
        return prisma.produto.findMany();
    }

    static async getById(idProduto: number) {
        return prisma.produto.findUnique({ where: { idProduto } });
    }

    static async create(data: any) {
        return prisma.produto.create({ data });
    }

    static async update(idProduto: number, data: any) {
        return prisma.produto.update({ where: { idProduto }, data })
    }

    static async delete(idProduto: number) {
        return prisma.produto.delete({ where: { idProduto } })
    }

}