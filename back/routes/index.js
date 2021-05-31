const express = require("express");
const router = express.Router();

const nuevaCarpetasRouter = require ("./nuevaCarpetaRouter")
const carpetasRouter = require("./carpetasRouter")
const carpetaSingleRouter = require ("./carpetaSingleRpouter")
const loginRouter = require ("./loginRouter")
const registerRouter = require ("./registerRouter")

router.use("/admin/login", loginRouter )
router.use("/admin/register", registerRouter)
router.use("/carpetas/nuevacarpeta", nuevaCarpetasRouter)
router.use("/carpetasingle" ,carpetaSingleRouter)
router.use("/carpetas", carpetasRouter)


module.exports = router;