const { Schema, model } = require("mongoose");

const Carucel = new Schema({
  img: { type: String },
});

module.exports = model("Carucel", Carucel);
