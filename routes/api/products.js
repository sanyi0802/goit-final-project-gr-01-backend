/**
 * @swagger
 * components:
 *   schemas:
 *     User:
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

const controllers = require("../../controllers/productController");
const { validateJWT } = require("../../utils/validateJWT");

//En point privados
router.get("/", validateJWT, controllers.getProducts);

module.exports = router;
