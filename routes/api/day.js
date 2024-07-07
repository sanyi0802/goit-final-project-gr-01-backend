const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/dayController");
const { validateJWT } = require("../../utils/validateJWT");

//End point privados
router.post("/", validateJWT, controllers.addProductByDay);

router.delete("/:foodId", validateJWT, controllers.deleteProductByDay);

router.get("/info", validateJWT, controllers.getProductsByDay);

module.exports = router;
