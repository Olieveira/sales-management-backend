import { Router } from "express";
import { EstoqueController } from "../controllers/estoque.controller";

const router = Router();

router.get('/', EstoqueController.getAll);
router.get('/:id', EstoqueController.getById)
router.put('/:id', EstoqueController.update)
router.post('/', EstoqueController.create)

export default router;