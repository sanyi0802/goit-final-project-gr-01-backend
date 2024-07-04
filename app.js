const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const connectDB = require("./db/config");
require("dotenv").config();

const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./utils/options.swagger");
const specs = swaggerJsdoc(options);

const usersRouter = require("./routes/api/users");

const app = express();

//const usersRouter = require("./routes/api/users");
const appRouter = require("./routes/api/router");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res, next) => {
  res.send("<h1>Proyecto final desarrollo fullstack FS11 backend ON!!</h1>");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
