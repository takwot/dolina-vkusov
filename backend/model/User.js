const { Schema, model } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  cart: { type: Array, default: [] },
  favourite: { type: Array, default: [] },
});

module.exports = model("User", User);
