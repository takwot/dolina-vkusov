const FAQ = require("../model/FAQ");

const addFAQ = async (req, res) => {
  const { question, answer } = req.body;

  const faq = new FAQ({ question, answer });

  faq.save();

  res.json({ message: "Success" });
};

const deleteFaq = async (req, res) => {
  const { id } = req.body;

  await FAQ.findOneAndDelete({ id });

  res.json({ message: "Success" });
};

const allFAQ = async (req, res) => {
  const data = await FAQ.find();

  res.json(data);
};

module.exports = {
  addFAQ,
  deleteFaq,
  allFAQ,
};
