const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://database:27017/store", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require("./routes/user.route");
const itemRouter = require("./routes/item.route");
const raitingRouter = require("./routes/raiting.route");
const faqRouter = require("./routes/faq.route");
const carucelRouter = require("./routes/carucel.route");

app.use("/api", userRouter);
app.use("/api", itemRouter);
app.use("/api", raitingRouter);
app.use("/api", faqRouter);
app.use("/api", carucelRouter);

app.listen(4001, () => {
  console.log("Running");
});
