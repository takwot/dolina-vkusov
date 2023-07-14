const Carucel = require("../model/Carucel");

const setImg = async (req, res) => {
  const { img } = req.body;

  console.log(img);
  const imgnew = new Carucel({
    img,
  });

  imgnew.save();

  console.log(imgnew);

  res.json({ me: "ok" });
};

const getImg = async (req, res) => {
  const data = await Carucel.find();

  res.json(data);
};

const changeImg = async (req, res) => {
  const { id, img } = req.body;
  await Carucel.findOneAndUpdate({ id }, { img });
  res.json({ me: "ok" });
};

const deleteImg = async (req, res) => {
  const { id } = req.body;

  await Carucel.findOneAndDelete({ id });

  res.json({ me: "ok" });
};

module.exports = {
  setImg,
  getImg,
  changeImg,
  deleteImg,
};
