import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ItensVendaService {
    static async getAll() {
        return await prisma.itemVenda.findMany();
    }

    static async getByVenda(idVenda: number) {
        return await prisma.itemVenda.findMany({ where: { idVenda } })
    }

    static async getByProduto(idProduto: number) {
        return await prisma.itemVenda.findMany({ where: { idProduto } })
    }

    static async create(data: any) {
        return prisma.itemVenda.create({ data });
    }

    static async update(idProduto: number, idVenda: number, data: any) {
        return prisma.itemVenda.update({
            where: {
                idVenda_idProduto: { idVenda, idProduto }
            },
            data
        });
    }

    static async delete(idProduto: number, idVenda: number) {
        return prisma.itemVenda.delete({
            where: {
                idVenda_idProduto: { idVenda, idProduto } // chave composta
            }
        });
    }
}