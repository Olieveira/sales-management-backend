import { Request, Response } from "express";
import { CategoriasProdutosService } from "../services/categoriasProdutos.service";

export class CategoriasProdutosController {

    static async getAll(req: Request, res: Response) {
        const categorias = await CategoriasProdutosService.getAll();
        res.json(categorias);
    }

    static async getById(req: Request, res: Response) {
        const categoria = await CategoriasProdutosService.getById(Number(req.params.id))
        categoria ? res.json(categoria) : res.json({error: 'Categoria não encontrada'});
    }

    static async create(req: Request, res: Response) {
        try {
            console.log("Body recebido: ", req.body)
            const novaCategoria = await CategoriasProdutosService.create(req.body);
            res.status(201).json({ novaCategoria })
        } catch (e) {
            console.log(e)
            res.status(500).json({ error: e instanceof Error ? e.message : 'Erro desconhecido' })
        }
    }

    static async delete(req: Request, res: Response) {
        const result = await CategoriasProdutosService.delete(Number(req.params.id));
        result ? res.status(204).json({ success: 'Material excluído!' }) : res.status(404).json({ error: 'Material não encontrado!' })
    }
}