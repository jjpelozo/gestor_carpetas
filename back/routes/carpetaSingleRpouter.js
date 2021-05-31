const express = require("express");
const carpetaSingleController= require("../controllers/carpetaSingle");
const router = express.Router();

router.get("/:id", carpetaSingleController.findOne)
router.put("/:id", carpetaSingleController.put)



module.exports = router;