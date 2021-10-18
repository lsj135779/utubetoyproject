const { Router } = require("express");
const router = Router();
const { User } = require("../models/index");

// user

router.get("/", async (req, res) => {
  const users = await User.findAll();
  const result = [];

  for (const user of users) {
    result.push({
      username: username,
      password: password,
    });
  }
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: username });

  if (user) {
    res.send({ username: username, password: password });
  } else {
    res.status(400).send("invalid user");
  }
});
