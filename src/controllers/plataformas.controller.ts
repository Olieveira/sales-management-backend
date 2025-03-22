import { Request, Response } from 'express';
import { PlataformasService } from '../services/plataformas.service';

export class PlataformasController {
    static async getAll(req: Request, res: Response) {
        const plataformas = await PlataformasService.getAll();
        res.json(plataformas);
    };
}