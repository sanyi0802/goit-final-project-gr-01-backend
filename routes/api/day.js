/**
 * @swagger
 * day/:
 *  post:
 * day/{foodId}:
 *  delete:
 * day/info:
 *  get:
 * components:
 *   schemas:
 *     Day:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: email's user
 *         password:
 *           type: string
 *           description: password's user
 *       example:
 *         email: pruebamail@goitmail.com
 *         password: passwordg01t
 */
const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/dayController");
const { validateJWT } = require("../../utils/validateJWT");

//End point privados
router.post("/", validateJWT, controllers.addProductByDay);

router.delete("/:foodId", validateJWT, controllers.deleteProductByDay);

router.get("/info", validateJWT, controllers.getProductsByDay);

module.exports = router;
