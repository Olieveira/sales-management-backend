import { Router } from 'express'
import { CategoriasProdutosController } from '../controllers/categoriasProdutos.controller'

const router = Router();

router.get('/', CategoriasProdutosController.getAll)
router.post('/', CategoriasProdutosController.create)
router.delete('/:id', CategoriasProdutosController.delete)

export default router;