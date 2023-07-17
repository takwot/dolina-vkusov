let images = [
  "http://45.12.72.2:80/file?filename=1689545848748-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545861342-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545872520-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545886775-img.jpeg",
];
const Carucel = require("../model/Carucel");

const setImg = async (req, res) => {
  const { img } = req.body;

  const data = await Carucel.findOne();

  const images = await Carucel.findOneAndUpdate(
    { _id: data._id },
    { img: [...data.img, img] },
    { new: true }
  );

  res.json(images.img);
};

const getImg = async (req, res) => {
  const data = await Carucel.findOne();
  res.json(data.img);
};

const changeImg = async (req, res) => {
  const { id, img } = req.body;

  const images = await Carucel.findOne();

  // images[id] = img;

  let newArr = [];

  images.img.map(function (el, index) {
    if (index == id) {
      newArr.push(img);
    }
    newArr.push(el);
  });

  const data = await Carucel.findOneAndUpdate(
    { _id: images._id },
    {
      img: newArr,
    },
    { new: true }
  );

  res.json(data.img);
};

const deleteImg = async (req, res) => {
  const { id } = req.query;

  console.log(id);

  let newArr = [];

  const images = await Carucel.findOne();

  images.img.map(function (el) {
    if (el !== id) {
      newArr.push(el);
    }
  });

  console.log(newArr);

  const data = await Carucel.findOneAndUpdate(
    { _id: images._id },
    {
      img: newArr,
    },
    { new: true }
  );

  res.json(data.img);
};

const createCarucel = async (req, res) => {
  const data = await Carucel.find();

  if (data.length == 0) {
    const newCarucel = new Carucel({
      img: images,
    });

    newCarucel.save();

    res.json(newCarucel.img);
  } else {
    res.json("Error");
  }
};

module.exports = {
  setImg,
  getImg,
  changeImg,
  deleteImg,
  createCarucel,
};
