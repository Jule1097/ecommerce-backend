import { Router } from "express";
const router = Router();
import * as orderCtrl from '../controllers/orders.controller';

router.post('/', orderCtrl.addOrder);

router.get('/', orderCtrl.getOrders);

export default router;