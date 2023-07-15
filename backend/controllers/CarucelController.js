let images = [];

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
