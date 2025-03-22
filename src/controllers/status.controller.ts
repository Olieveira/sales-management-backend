import { Request, Response } from "express";
import { StatusService } from "../services/status.service";

export class StatusController {
    static async getAll(req: Request, res: Response) {
        const status = await StatusService.getAll();
        res.json(status);
    }
}