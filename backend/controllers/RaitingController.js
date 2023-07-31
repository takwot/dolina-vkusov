const Raiting = require("../model/Raiting");

const getRaiting = async (req, res) => {
  const data = await Raiting.find();

  console.log(data);

  res.json(data).status(200);
};

const createRaiting = async (req, res) => {
  const { name, text, raiting, image } = req.body;

  console.log(image);

  const newRaiting = new Raiting({
    name,
    text,
    raiting,
    image,
  });

  newRaiting.save();

  res.json({ message: "Success" });
};

module.exports = {
  getRaiting,
  createRaiting,
};
