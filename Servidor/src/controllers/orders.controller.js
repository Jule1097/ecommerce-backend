import Order from "../models/Order";

export const addOrder = async (req, res) => {

    const newOrder = new Order(req.body);

    const orderSaved = await newOrder.save();
    
    res.status(201).json(orderSaved);
};

export const getOrders = async (req, res) => {
  
  const orders = await Order.find();
  res.json(orders);
};
