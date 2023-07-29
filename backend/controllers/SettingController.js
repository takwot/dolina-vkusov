const Settings = require("../model/Settings");

const changeSetting = async (req, res) => {
  const { time, phone } = req.body;

  const isExist = await Settings.find();

  console.log(isExist, time, phone);

  if (isExist.length == 0) {
    const newSettings = new Settings({
      time: time,
      phone: phone,
    });

    newSettings.save();

    res.json(newSettings);
  } else {
    const id = isExist[0]._id;

    const data = await Settings.findOneAndUpdate(
      { _id: id },
      { time, phone },
      { new: true }
    );

    res.json(data);
  }
};

const getSettings = async (req, res) => {
  const data = await Settings.findOne();
  res.json(data);
};

module.exports = { changeSetting, getSettings };
