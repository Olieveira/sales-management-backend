import { Request, Response } from "express";
import { EstoqueService } from "../services/estoque.service";

export class EstoqueController {

    static async getAll(req: Request, res: Response) {
        const estoque = await EstoqueService.getAll();
        res.json(estoque);
    }
    static async getById(req: Request, res: Response) {
        const estoque = await EstoqueService.getById(Number(req.params.id))
        res.json(estoque);
    }
    static async update(req: Request, res: Response) {
        req.body.criadoEm = new Date(req.body.criadoEm).toISOString();
        req.body.fornecedor = { connect: { idFornecedor: req.body.idFornecedor } };
        delete req.body.idMaterial;
        delete req.body.idFornecedor;
        const estoque = await EstoqueService.update(Number(req.params.id), req.body);
        estoque ? res.json({ success: true, estoque }) : res.json({ success: false, error: 'Falha ao atualizar material!' })
    }
    static async create(req: Request, res: Response) {
        req.body.criadoEm = new Date(req.body.criadoEm).toISOString();
        req.body.fornecedor = { connect: { idFornecedor: req.body.idFornecedor } };
        delete req.body.idFornecedor;
        const estoque = await EstoqueService.create(req.body);
        estoque ? res.status(201).json(estoque) : res.status(400).json({ error: 'Erro ao criar material' });
    }
    static async delete(req: Request, res: Response){
        const result = await EstoqueService.delete(Number(req.params.id));
        result ? res.status(204).send() : res.status(404).json({error: 'Material não encontrado!'})
    }
}