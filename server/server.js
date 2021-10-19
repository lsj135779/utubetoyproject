const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 4000;
const { sequlize } = require("./models/index");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("./routes/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.listen(PORT, () => {
  console.log(`Server On: http//localhost:${PORT}/`);
});
