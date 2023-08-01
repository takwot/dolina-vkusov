const { Schema, model } = require("mongoose");

const Favourity = new Schema({
  name: { type: String, required: true },
  img: { type: String, default: "" },
  price: { type: String, required: true },
  id: { type: String, required: true },
});

module.exports = model("Favourity", Favourity);
