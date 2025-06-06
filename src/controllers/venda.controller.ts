import { Request, Response } from 'express';
import { VendaService } from '../services/venda.service';

export class VendaController {

    static async getAll(req: Request, res: Response) {
        const vendas = await VendaService.getAll();
        res.json(vendas);
    }

    static async getById(req: Request, res: Response) {
        const venda = await VendaService.getById(Number(req.params.id));
        venda ? res.json(venda) : res.status(404).json({ error: 'Venda não encontrada' });
    }

    static async create(req: Request, res: Response) {
        req.body.criadoEm = new Date(req.body.criadoEm).toISOString()
        const venda = await VendaService.create(req.body);
        
        if (venda) {
            res.status(201).json(venda);
        } else {
            res.status(400).json({ error: 'Erro ao criar venda' });
        }
    }

    static async update(req: Request, res: Response) {
        const venda = await VendaService.update(Number(req.params.id), req.body);
        venda ? res.json({ succcess: true, venda: venda }) : res.status(404).json({ success: false, error: 'Venda não encontrada' });
    }

    static async delete(req: Request, res: Response) {
        const result = await VendaService.delete(Number(req.params.id));
        result ? res.status(204).send() : res.status(404).json({ error: 'Venda não encontrada' });
    }
}