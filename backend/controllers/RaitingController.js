const Raiting = require("../model/Raiting");

const getRaiting = async (req, res) => {
  const data = await Raiting.find();

  res.json(data).status(200);
};

const createRaiting = async (req, res) => {
  const { name, text, raiting, image } = req.body;

  const newRaiting = new Raiting({
    name,
    text,
    raiting,
    image,
  });
  newRaiting.save();
  res.json(newRaiting);
};

module.exports = {
  getRaiting,
  createRaiting,
};
