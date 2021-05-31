const Carpetas = require("../models/carpetas");

const nuevaCarpetaController = {
  create(req, res) {
    Carpetas.create(req.body).then((carpetas) => {
      res.send(carpetas);
    });
  },
  
};
module.exports = nuevaCarpetaController;
