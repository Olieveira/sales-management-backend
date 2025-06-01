import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoriasProdutosService {

    static async getAll() {
        return prisma.categoriasProdutos.findMany();
    }

    static async getById(idCategoria: number) {
        return prisma.categoriasProdutos.findUnique({ where: { idCategoria } })
    }

    static async create(data: any) {
        return prisma.categoriasProdutos.create({ data })
    }

    static async delete(idCategoria: number) {
        return prisma.categoriasProdutos.delete({ where: { idCategoria } })
    }
}