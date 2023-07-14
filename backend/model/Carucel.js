const { Schema, model } = require("mongoose");

const Carucel = new Schema({
  img: { type: String, required: true },
});

module.exports = model("Carucel", Carucel);
