const Item = require("../model/Item");

const createItem = async (req, res) => {
  const {
    name,
    price,
    img,
    description,
    maker,
    type,
    category,
    mini_category,
  } = req.body;

  const item = new Item({
    name,
    price,
    img,
    description,
    maker,
    type,
    category,
    mini_category,
  });

  item.save();

  res.json({ message: "Success" }).status(200);
};

const deleteItem = async (req, res) => {
  const { id } = req.body;

  const item = await Item.findOneAndDelete({ id: id });
  console.log(item);
  res.json({ message: "Success" }).status(200);
};

const getAllItem = async (req, res) => {
  const data = await Item.find();

  res.json(data).status(200);
};

const getItemByCategory = async (req, res) => {
  const { category, type, mini_category } = req.query;

  const data = await Item.find({ category, type, mini_category });

  res.json(data).status(200);
};

const getItemOne = async (req, res) => {
  const { type } = req.query;

  const data = await Item.find({ type });

  res.json(data).status(200);
  console.log(data);
};
const getItemSecond = async (req, res) => {
  const { type, category } = req.query;

  const data = await Item.find({ type, category });

  res.json(data).status(200);
};

const getItem = async (req, res) => {
  const { id } = req.query;

  console.log(id);

  const item = await Item.findOne({ _id: id });
  console.log(item);

  res.json(item);
};

module.exports = {
  createItem,
  deleteItem,
  getAllItem,
  getItemByCategory,
  getItemOne,
  getItemSecond,
  getItem,
};
