const express = require("express");

const appRouter = express.Router();

const userRouter = require("./users");
const dailyrateRouter = require("./dailyrate");
const dayRouter = require("./day");
const productsRouter = require("./products");
const dailyIntakeRouter = require("./ingestaDiaria");

appRouter.use("/users", userRouter);
appRouter.use("/daily-rate", dailyrateRouter);
appRouter.use("/day", dayRouter);
appRouter.use("/products", productsRouter);
appRouter.use("/ingesta-diaria", dailyIntakeRouter);

module.exports = appRouter;
