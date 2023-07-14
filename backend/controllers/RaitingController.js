const Raiting = require("../model/Raiting");

const getRaiting = async (req, res) => {
  const data = await Raiting.find();

  console.log(data);

  res.json(data).status(200);
};

const createRaiting = async (req, res) => {
  const { name, text } = req.body;

  const newRaiting = new Raiting({
    name,
    text,
  });

  newRaiting.save();

  res.json({ message: "Success" });
};

module.exports = {
  getRaiting,
  createRaiting,
};
