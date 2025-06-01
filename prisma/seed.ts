import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.categoriasProdutos.createMany({
        data: [
            { nome: 'Agendas' },
            { nome: 'Canecas' },
            { nome: 'Camisetas' },
        ],
        skipDuplicates: true,
    });

    await prisma.statusEtapa.createMany({
        data: [
            { status: 'Aguardando' },
            { status: 'Em andamento' },
            { status: 'Finalizado' },
        ],
        skipDuplicates: true,
    });

    await prisma.statusProcesso.createMany({
        data: [
            { status: 'Pendente' },
            { status: 'Em andamento' },
            { status: 'Concluído' },
            { status: 'Pausado' },
            { status: 'Cancelado' },
        ],
        skipDuplicates: true,
    });

    await prisma.plataformaVenda.createMany({
        data: [
            { nome: 'Shopee', linkHome: 'https://shopee.com.br' },
            { nome: 'Mercado Livre', linkHome: 'https://www.mercadolivre.com.br/' },
        ],
        skipDuplicates: true,
    });

    await prisma.statusVenda.createMany({
        data: [
            { status: 'Pendente' },
            { status: 'Em andamento' },
            { status: 'Concluído' },
            { status: 'Cancelado' },
            { status: 'Atrasado' },
            { status: 'Retornado' },
        ],
        skipDuplicates: true,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });