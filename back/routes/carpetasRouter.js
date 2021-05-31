const express = require("express");
const carpetasController= require("../controllers/carpetas");
const router = express.Router();

router.get("/", carpetasController.findAll)
router.post("/", carpetasController.find)

module.exports = router;