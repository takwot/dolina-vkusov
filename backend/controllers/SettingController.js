const settings = {
  time: "",
  phone: "",
};

const changeSetting = async (req, res) => {
  const { time, phone } = req.body;

  settings.phone = phone;
  settings.time = time;

  res.json(settings);
};

const getSettings = async (req, res) => {
  res.json(settings);
};

module.exports = { changeSetting, getSettings };
