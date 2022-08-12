const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  elenco: { type: String, unique: false, required: false },
  descripcion: { type: String, unique: false, required: false },
  director: { type: String, required: false },
  genero: { type: String, unique: false, required: false },
  imagen: { type: String, unique: false, required: false },
});

module.exports = mongoose.model("anime", schema);
