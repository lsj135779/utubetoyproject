require("dotenv").config();
//const config = require('./config/config'); //  config를 불러온다.
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const { sequlize } = require("./models/index");

const linksRouter = require("./routes/links");
//const userRoutes = require("./routes/user");

sequlize
  .sync()
  .then(() => console.log("연결완료"))
  .catch((err) => console.error("errrrrrrrr", err));

//app.use("./routes/user", userRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', linksRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server Response Success");
});
app.get("/login", (res, result) => {
  res.status(200)
})

app.listen(PORT, () => {
  console.log(`Server On: http//localhost:${PORT}/`);
});
