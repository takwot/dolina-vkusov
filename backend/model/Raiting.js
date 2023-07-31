const { Schema, model } = require("mongoose");

const Raiting = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  raiting: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = model("Raiting", Raiting);
