import { Router } from "express";
import { EstoqueController } from "../controllers/estoque.controller";

const router = Router();

router.get('/', EstoqueController.getAll);
router.get('/:id', EstoqueController.getById)

export default router;