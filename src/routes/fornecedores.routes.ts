import { Router } from 'express';
import { FornecedorController } from '../controllers/fornecedor.controller';

const router = Router();

router.get('/', FornecedorController.getAll);
router.get('/:id', FornecedorController.getById);
router.post('/', FornecedorController.create);
router.put('/:id', FornecedorController.update);
router.delete('/:id', FornecedorController.delete);

export default router;
