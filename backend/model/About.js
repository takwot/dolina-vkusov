const { Schema, model } = require("mongoose");

const About = new Schema({
  text: { type: String, required: true },
  image: { type: String, default: "" },
});

module.exports = model("About", About);
