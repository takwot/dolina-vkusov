const User = require("../model/User");

const createUser = async (req, res) => {
  const { email, password, name, phone } = req.body;

  const isExist = await User.findOne({ email });

  if (isExist == null) {
    const newUser = new User({
      email,
      password,
      name,
      phone,
    });

    newUser.save();

    res.json(newUser).status(200);
  } else {
    res.json({ message: "Error" }).status(400);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.query;

  const user = await User.findOne({ email, password });

  if (user == null) {
    res.json({ message: "Error" }).status(400);
  } else {
    res.json(user).status(200);
  }
};

const getCart = async (req, res) => {
  const { email } = req.query;

  const cart = await User.findOne({ email });

  res.json(cart.cart).status(200);
};

const getFavourity = async (req, res) => {
  const { email } = req.query;

  const cart = await User.findOne({ email });

  res.json(cart.cart).status(200);
};

const updateCart = async (req, res) => {
  const { email, cart } = req.body;

  const newCart = await User.findOneAndUpdate(
    { email },
    { cart: [...cart] },
    {
      new: true,
    }
  );

  res.json(newCart).status(200);
};

const updateFavourity = async (req, res) => {
  const { email, favourity } = req.body;

  const newFavourity = await User.findOneAndUpdate(
    { email },
    { favourity: [...favourity] },
    {
      new: true,
    }
  );

  res.json(newFavourity).status(200);
};

const deleteUser = async (req, res) => {
  const { id } = req.query;

  await User.findOneAndDelete({ _id: id });

  res.json({ me: "ok" });
};

const allUsers = async (req, res) => {
  const data = await User.find();
  res.json(data);
};

module.exports = {
  deleteUser,
  allUsers,
  createUser,
  loginUser,
  getCart,
  getFavourity,
  updateCart,
  updateFavourity,
};
