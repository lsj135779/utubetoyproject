const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const { sequlize } = require("./models/index");
const userRoutes = require("./routes/user");

sequlize
  .sync()
  .then(() => console.log("연결완료"))
  .catch((err) => console.error("errrrrrrrr", err));

app.use("./routes/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.listen(PORT, () => {
  console.log(`Server On: http//localhost:${PORT}/`);
});
