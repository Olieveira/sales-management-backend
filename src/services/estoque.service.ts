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
}