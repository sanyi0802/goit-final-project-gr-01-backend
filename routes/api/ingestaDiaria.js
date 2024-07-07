const express = require("express");
const router = express.Router();
const { obtenerIngestaDiaria, guardarIngestaDiaria } = require("../../controladores/ingestaDiariaControlador");
const verifyToken = require("../../middlewares/auth.middleware");

router.get("/", verifyToken, obtenerIngestaDiaria);
router.post("/", verifyToken, guardarIngestaDiaria);

module.exports = router;
