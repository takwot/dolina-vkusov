const Carucel = require("../model/Carucel");

const addImg = async (req, res) => {
  const newImg = new Carucel({ img: req.body.img });

  newImg.save().then(() => {
    res.status(200).json({ status: true, newImg });
  });
};

const getImg = async (req, res) => {
  const imgs = await Carucel.find();

  res.json(imgs);
};

const deleteImg = async (req, res) => {
  const { id } = req.query;

  await Carucel.findByIdAndDelete(id);

  res.json({ status: true });
};

const updateImage = async (req, res) => {
  const { img } = req.body;
  const { id } = req.query;

  Carucel.findOneAndUpdate({ _id: id }, { img: img }).then(() => {
    res.status(200).json({ status: true });
  });
};

module.exports = {
  addImg,
  getImg,
  deleteImg,
  updateImage,
};
