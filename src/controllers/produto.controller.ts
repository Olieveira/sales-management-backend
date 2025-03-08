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
        const produto = await ProdutoService.create(req.body);
        res.status(201).json(produto);
    }

    static async update(req: Request, res: Response) {
        const produto = await ProdutoService.update(Number(req.params.id), req.body);
        produto ? res.json(produto) : res.status(404).json({ error: 'Produto não encontrado' });
    }

    static async delete(req: Request, res: Response) {
        const result = await ProdutoService.delete(Number(req.params.id));
        result ? res.status(204).send() : res.status(404).json({ error: 'Produto não encontrado' });
    }
}