const { Schema, model } = require("mongoose");

const Item = new Schema({
  name: { type: String, default: "" },
  img: { type: String, default: "" },
  price: { type: String, default: "" },
  year: { type: String, default: "" },
  energy: { type: String, default: "" },
  description: { type: String, default: "" },
  maker: { type: String, default: "" },
  type: { type: String, default: "" },
  category: { type: String, default: "" },
  mini_category: { type: String, default: "" },
  structure: { type: String, default: "" },
});

module.exports = model("Item", Item);
