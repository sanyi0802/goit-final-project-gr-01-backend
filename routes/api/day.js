const express = require("express");
const router = express.Router();
const controllers = require("../../controladores/dayController");
const verifyToken = require("../../middlewares/auth.middleware");

router.post("/", verifyToken, controllers.addProductByDay);
router.delete("/", verifyToken, controllers.deleteProductByDay);
router.post("/info", verifyToken, controllers.getProductsByDay);

module.exports = router;
