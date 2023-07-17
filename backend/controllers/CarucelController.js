let images = [
  "http://45.12.72.2:80/file?filename=1689545848748-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545861342-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545872520-img.jpeg",
  "http://45.12.72.2:80/file?filename=1689545886775-img.jpeg",
];

const setImg = async (req, res) => {
  const { img } = req.body;

  images.push(img);

  res.json(images);
};

const getImg = async (req, res) => {
  res.json(images);
};

const changeImg = async (req, res) => {
  const { id, img } = req.body;

  images[id] = img;

  res.json(images);
};

const deleteImg = async (req, res) => {
  const { id } = req.query;

  console.log(id);

  let newArr = [];

  images.map(function (el) {
    if (el !== id) {
      newArr.push(el);
    }
  });

  console.log(newArr);

  images = newArr;

  console.log(images);

  res.json(images);
};

module.exports = {
  setImg,
  getImg,
  changeImg,
  deleteImg,
};
