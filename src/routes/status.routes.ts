import { Router } from 'express';
import { StatusController } from '../controllers/status.controller';

const router = Router();

router.get('/', StatusController.getAll);

export default router;