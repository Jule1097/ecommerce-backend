import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import ordersRoutes from "./routes/orders.routes";
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes";

const cors = require("cors");

const app = express();
createRoles();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.get("/api/orders", (req, res) => {

  res.json({
    items: order[0].map(({ name, price, _id, quantity }) => ({
      name,
      price,
      _id,
      quantity
    })),
  });

  const countItems = order.filter(e => e.name)

  const firstPrice = Object.values(countItems).reduce((acc , {price}) => acc + price, 0)

  const taxes = firstPrice * 0.21;

  const total = firstPrice + taxes

  const date = new Date().toLocaleString();

  order.taxes = taxes;
  order.total = total;
  order.date = date;

});

const order = [];

app.post("/api/orders", (req, res) => {
  const orders = req.body;

  order.push(orders)
  
});

app.use(cors());

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

export default app;
