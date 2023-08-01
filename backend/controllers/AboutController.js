const About = require("../model/About");

const createAbout = async (req, res) => {
  const { text, image } = req.body;

  const newAbout = new About({ text, image });

  newAbout.save();

  res.json(newAbout);
};

const getAbout = async (req, res) => {
  const data = await About.find();

  res.json(data);
};

const deleteAbout = async (req, res) => {
  const { id } = req.query;

  await About.findOneAndDelete({ _id: id });

  res.json({ message: "Success" });
};

const changeAbout = async (req, res) => {
  const { text, image, id } = req.body;
  const newAbout = await About.findOneAndUpdate(
    { _id: id },
    { text, image },
    { new: true }
  );
  res.json(newAbout);
};

module.exports = {
  createAbout,
  getAbout,
  deleteAbout,
  changeAbout,
};
