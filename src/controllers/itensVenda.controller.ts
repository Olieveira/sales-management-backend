import { Request, Response } from "express";
import { ItensVendaService } from "../services/itensVenda.service";

export class ItensVendaController {
    static async getAll(req: Request, res: Response) {
        const itensVenda = await ItensVendaService.getAll();
        res.json(itensVenda);
    }
    static async getByVenda(req: Request, res: Response) {
        const itensVenda = await ItensVendaService.getByVenda(Number(req.params.id));
        res.json(itensVenda);
    }
    static async getByProduto(req: Request, res: Response) {
        const itensVenda = await ItensVendaService.getByVenda(Number(req.params.id));
        res.json(itensVenda);
    }

    static async create(req: Request, res: Response) {
        try {
            const itensVenda = await ItensVendaService.create(req.body);
            res.status(201).json(itensVenda);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e instanceof Error ? e.message : "Erro desconhecido!" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { idProduto, idVenda, ...data } = req.body;
            const updatedItem = await ItensVendaService.update(idProduto, idVenda, data);
            res.json(updatedItem);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e instanceof Error ? e.message : "Erro desconhecido!" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { idProduto, idVenda } = req.body;
            await ItensVendaService.delete(idProduto, idVenda);
            res.status(204).send();
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e instanceof Error ? e.message : "Erro desconhecido!" });
        }
    }
}