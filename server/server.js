require("dotenv").config();
const cors = require("cors");
//const config = require('./config/config'); //  config를 불러온다.
const express = require("express");
// const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 4000;
const { sequlize } = require("./models");

const linksRouter = require("./routes/links");
//const userRoutes = require("./routes/user");

//app.use("./routes/user", userRoutes);
// sequlize.sync();
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", linksRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server Response Success");
});

// app.get("/login", (res, result) => {
//   res.status(200);
// });

module.exports = app.listen(PORT, () => {
  console.log(`Server On: http//localhost:${PORT}/`);
});
