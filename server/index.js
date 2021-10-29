require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const { sequlize } = require("./models");
const https = require("https");
const cookieParser = require("cookie-parser");
const linksRouter = require("./routes");
// const controllers = require("./controllers");

app.use(express.json({
  limit: "50mb"
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  })
);
// app.get(cookieParser());

app.use("/", linksRouter);
//app.use("/play", linksRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("Server Response Success");
// });

// app.get("/login", (res, result) => {
//   res.status(200);
// });

module.exports = app.listen(PORT, () => {
  console.log(`Server On: http//localhost:${PORT}/`);
});
