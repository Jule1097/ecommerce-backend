import { Router } from "express";
const router = Router();
const orderSchema = require('../models/Order')

router.post('/api/orders', (req, res) => {
    const order = orderSchema(req.body);
    order.save()
    .then((data)=> res.json(data));
});

router.get('/api/orders', (req, res) => {
    orderSchema
    .find()
    .then((data)=> res.json(data));   
});

export default router;