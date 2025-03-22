import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class VendaService {
    static async getAll() {
        const vendas = await prisma.venda.findMany({
            include: {
                plataforma: { select: { nome: true }, },
                status: { select: { status: true }, },
                itensVenda: {
                    include: {
                        produto: true,
                    }
                }
            }
        });

        const formatado = vendas.map((venda) => ({
            ...venda,
            plataforma: venda.plataforma.nome,
            status: venda.status.status,
            itensVenda: venda.itensVenda.map((produto) => ({
                idProduto: produto.idProduto,
                quantidade: produto.quantidade,
                unidade: produto.unidade,
                produto: produto.produto
            }))
        }));

        return formatado;
    };

    static async getById(idVenda: number) {
        const venda = await prisma.venda.findUnique({
            where: { idVenda },
            include: {
                plataforma: { select: { nome: true }, },
                status: { select: { status: true }, },
                itensVenda: {
                    include: {
                        produto: true,
                    }
                }
            }
        });

        const formatado = {
            ...venda,
            plataforma: venda?.plataforma?.nome,
            status: venda?.status?.status,
            itensVenda: venda?.itensVenda?.map((produto) => ({
                idProduto: produto.idProduto,
                quantidade: produto.quantidade,
                unidade: produto.unidade,
                produto: produto.produto
            }))
        };

        return formatado;
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