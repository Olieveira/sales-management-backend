import { Router } from "express";
import { ItensVendaController } from '../controllers/itensVenda.controller';


const router = Router();

router.get('/', ItensVendaController.getAll);
router.get('/venda/:id', ItensVendaController.getByVenda);
router.post('/', ItensVendaController.create);
router.put('/', ItensVendaController.update);
router.delete('/', ItensVendaController.delete);

export default router;