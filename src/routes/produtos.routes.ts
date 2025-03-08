import { Router } from 'express';
import { ProdutoController } from '../controllers/produto.controller';

const router = Router();

router.get('/', ProdutoController.getAll);
router.get('/:id', ProdutoController.getById);
router.post('/', ProdutoController.create);
router.put('/:', ProdutoController.update);
router.delete('/:id', ProdutoController.delete);

export default router;