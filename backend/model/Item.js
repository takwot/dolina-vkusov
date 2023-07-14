const { Schema, model } = require("mongoose");

const Item = new Schema({
  name: { type: String, required: true },
  img: { type: Array, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  maker: { type: String, required: true },
  type: { type: String, default: "" },
  category: { type: String, default: "" },
  mini_category: { type: String, default: "" },
});

module.exports = model("Item", Item);
