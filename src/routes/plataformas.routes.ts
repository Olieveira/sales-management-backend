import { Router } from 'express';
import { PlataformasController } from '../controllers/plataformas.controller';

const router = Router();

router.get('/', PlataformasController.getAll);

export default router;