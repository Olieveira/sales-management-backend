import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoriasProdutosService {

    static async getAll() {
        return await prisma.categoriasProdutos.findMany();
    }

    static async create(data: any) {
        return await prisma.categoriasProdutos.create({ data })
    }

    static async delete(idCategoria: number) {
        return await prisma.categoriasProdutos.delete({ where: { idCategoria } })
    }
}