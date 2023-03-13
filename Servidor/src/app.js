import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import ordersRoutes from "./routes/orders.routes";
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes";
import permissionsRoutes from './routes/permissions.routes';

const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");

createRoles();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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


app.use(cors());


app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/rolepermissions", permissionsRoutes)

export default app;
