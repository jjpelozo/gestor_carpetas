const Carpetas = require ("../models/carpetas")

const carpetasController ={
   
    findAll(req, res){
        Carpetas.find({}).sort({numero: -1})
        
        .then((carpetas)=>
        res.send (carpetas))
    },
    find(req, res){
        console.log(req.body.autos)
        Carpetas.find({ autos: { $gte: req.body.autos}}).sort({numero: -1})
        .then((carpetas)=>
        res.send (carpetas))
    }
}

module.exports = carpetasController;