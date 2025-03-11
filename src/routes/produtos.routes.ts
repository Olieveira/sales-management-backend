import { Router } from 'express';
import { ProdutoController } from '../controllers/produto.controller';

const router = Router();

router.get('/', ProdutoController.getAll);
router.get('/:id', ProdutoController.getById);
router.post('/c', ProdutoController.create);
router.put('/:id', ProdutoController.update);
router.put('/inativar/:id', ProdutoController.update);
router.put('/ativar/:id', ProdutoController.update);

export default router;