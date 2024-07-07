const express = require("express");
const router = express.Router();
const {
  obtenerIngestaDiaria,
  guardarIngestaDiaria,
} = require("../../controladores/ingestaDiariaControlador");
const { validateJWT } = require("../../utils/validateJWT");

router.get("/", validateJWT, obtenerIngestaDiaria);
router.post("/", validateJWT, guardarIngestaDiaria);

module.exports = router;
