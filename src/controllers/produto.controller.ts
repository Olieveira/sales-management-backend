import { Request, Response } from 'express';
import { ProdutoService } from '../services/produto.service';

export class ProdutoController {
    static async getAll(req: Request, res: Response) {
        const produtos = await ProdutoService.getAll();
        res.json(produtos);
    }

    static async getById(req: Request, res: Response) {
        const produto = await ProdutoService.getById(Number(req.params.id));
        produto ? res.json(produto) : res.status(404).json({ error: 'Produto não encontrado' });
    }

    static async create(req: Request, res: Response) {
        try {
            if (req.body.criadoEm) {
                req.body.criadoEm = new Date(req.body.criadoEm).toISOString()
            }
            if (req.body.ativo) {
                req.body.inativoEm = null
            } else {
                req.body.inativoEm = new Date(req.body.inativoEm).toISOString()
            }

            const produto = await ProdutoService.create(req.body);
            res.status(201).json(produto);
        } catch (e) {
            console.error(e); // Log do erro no servidor
            res.status(500).json({ error: e instanceof Error ? e.message : "Erro desconhecido" });
        }
    }

    static async update(req: Request, res: Response) {
        if (typeof req.body.estoqueUn === 'string') {
            req.body.estoqueUn = Number(req.body.estoqueUn);
        }
        if (req.body.criadoEm) {
            req.body.criadoEm = new Date(req.body.criadoEm).toISOString();
        }
        if (req.body.inativoEm) {
            req.body.inativoEm = new Date(req.body.inativoEm).toISOString();
        }

        const produto = await ProdutoService.update(Number(req.params.id), req.body);


        if (produto) {
            res.json({ success: true, produto });
        } else {
            res.status(404).json({ success: false, error: 'Produto não encontrado' });
        }
    }
}