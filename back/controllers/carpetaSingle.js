const Carpetas = require("../models/carpetas");

const carpetaSingleController = {
  findOne(req, res) {
    console.log(req.params.id);
    Carpetas.findById(req.params.id).then((carpeta) => res.send(carpeta));
  },

  put(req, res){
    console.log (req.body);
    Carpetas.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(carpeta => res.send(carpeta).status(200))
    .catch( e => res.send(e).status(500))
}, 


};

module.exports = carpetaSingleController;
