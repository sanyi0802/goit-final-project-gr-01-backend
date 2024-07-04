const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/userControllers/index");
const { validateJWT } = require("../../utils/validateJWT");

//End point publicos
router.post("/signup", controllers.registerUser);

router.post("/login", controllers.login);

//En point privados
router.get("/logout", validateJWT, controllers.logout);

router.get("/current", validateJWT, controllers.current);

module.exports = router;
