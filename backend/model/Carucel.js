const { Schema, model } = require("mongoose");

const Carucel = new Schema({
  img: { type: Array },
});

module.exports = model("Carucel", Carucel);
