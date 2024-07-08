const express = require("express");
const router = express.Router();
const controllers = require("../../controladores/productController");
const verifyToken = require("../../middlewares/auth.middleware");

router.get("/", verifyToken, controllers.getProducts);

module.exports = router;
