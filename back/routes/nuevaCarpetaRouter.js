const express = require("express");
const nuevaCarpetaController= require("../controllers/nuevaCarpeta");
const router = express.Router();

router.post("/", nuevaCarpetaController.create)


module.exports = router;
