const { Schema, model } = require("mongoose");

const Settings = new Schema({
  phone: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = model("Settings", Settings);
