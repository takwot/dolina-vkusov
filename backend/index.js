const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

mongoose
  .connect("mongodb://45.90.32.77:27017/store", {
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
const settingsRouter = require("./routes/setting.route");
const favourityRouter = require("./routes/favourity.route");
const aboutRouter = require("./routes/about.route");

app.use("/api", userRouter);
app.use("/api", itemRouter);
app.use("/api", raitingRouter);
app.use("/api", faqRouter);
app.use("/api", carucelRouter);
app.use("/api", settingsRouter);
app.use("/api", favourityRouter);
app.use("/api", aboutRouter);

app.listen(4001, () => {
  console.log("Running");
});
