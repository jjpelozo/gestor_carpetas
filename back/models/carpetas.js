const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  numero: {
    type: Number,
   
  },
  autos: {
    type: String,
    required: true,
  },
  juzgado: {
    type: String,
   
  },
  estado:{
    type: String
  },
  representado: {
    type: String,
    default: "Actor",
  },
  aportante: {
    type: String,
  },
  operativo: {
    type: String,
  },
  derivacion: {
    type: String,
  },
  ingreso:{
      type:Date, 
      default: Date.now
  },
  comentario: {
   type: String,
   default: "Sin comentarios"
       },
});

const Carpeta = mongoose.model("Carpeta", schema);

module.exports = Carpeta;
