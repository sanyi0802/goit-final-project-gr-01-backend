const express = require("express");
const router = express.Router();
const controllers = require("../../controladores/dailyRateControllers");
const verifyToken = require("../../middlewares/auth.middleware");

router.post("/", controllers.dailyRate);
router.post("/:userId", verifyToken, controllers.dailyRateById);

module.exports = router;
