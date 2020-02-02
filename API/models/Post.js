const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  fotoPost: { type: String, required: true },
  pieDeFoto: { type: String },
  usuario: { fotoUsuario: String, nombreUsuario: String },
  feCreacion: { type: Date, default: Date.now },
  estado: { type: String, default: "A" }
});
const post = mongoose.model("post", postSchema);
module.exports = post;
