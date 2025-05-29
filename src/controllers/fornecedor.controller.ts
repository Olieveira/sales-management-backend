import { Request, Response } from 'express';
import { FornecedorService } from '../services/fornecedor.service';

export class FornecedorController {
    static async getAll(req: Request, res: Response) {
        const fornecedores = await FornecedorService.getAll();
        res.json(fornecedores);
    }

    static async getById(req: Request, res: Response) {
        const fornecedor = await FornecedorService.getById(Number(req.params.id));
        fornecedor ? res.json(fornecedor) : res.status(404).json({ error: 'Fornecedor não encontrado' });
    }

    static async create(req: Request, res: Response) {
        const fornecedor = await FornecedorService.create(req.body);
        fornecedor ? res.status(201).json(fornecedor) : res.status(400).json({ error: 'Erro ao criar fornecedor' });
    }

    static async update(req: Request, res: Response) {
        const fornecedor = await FornecedorService.update(Number(req.params.id), req.body);
        fornecedor ? res.json({ success: true, fornecedor }) : res.status(404).json({ success: false, error: 'Fornecedor não encontrado' });
    }

    static async delete(req: Request, res: Response) {
        const result = await FornecedorService.delete(Number(req.params.id));
        result ? res.status(204).send() : res.status(404).json({ error: 'Fornecedor não encontrado' });
    }
}
