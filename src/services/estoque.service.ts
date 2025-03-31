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
}