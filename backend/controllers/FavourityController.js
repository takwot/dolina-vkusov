const Favourity = require("../model/Favourity");

const createNewFavourity = async (req, res) => {
  const { name, img, price, id } = req.body;

  const newFavourity = new Favourity({ name, img, price, id });

  newFavourity.save();

  res.json(newFavourity);
};

const deleteFavourity = async (req, res) => {
  const { id } = req.query;

  await Favourity.findOneAndDelete({ _id: id });

  res.json({ message: "Success" }).status(200);
};

const getFavourity = async (req, res) => {
  const data = await Favourity.find();
  res.json(data);
};

module.exports = {
  createNewFavourity,
  deleteFavourity,
  getFavourity,
};
