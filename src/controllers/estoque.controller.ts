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
}