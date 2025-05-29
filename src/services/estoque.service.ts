import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EstoqueService {
    static async getAll() {
        const estoque = await prisma.estoque.findMany({
            include: {
                fornecedor: {
                    select:
                    {
                        nome: true,
                        contato: true,
                        link: true
                    }
                }
            }
        });

        return estoque;
    };

    static async getById(id: number) {
        return await prisma.estoque.findUnique({
            where: { idMaterial: id },
            include: {
                fornecedor: {
                    select: {
                        nome: true, contato: true, link: true
                    }
                }
            }
        })
    }

    static async update(idMaterial: number, data: any) {
        return prisma.estoque.update({ where: { idMaterial }, data });
    }

    static async create(data: any) {
        return prisma.estoque.create({ data });
    }

    static async delete(idMaterial: number) {
        return prisma.estoque.delete({ where: { idMaterial } })
    }
}