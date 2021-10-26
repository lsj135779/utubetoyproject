const multer = require("multer");
const db = require("../models");
const { videos } = require("../models");

/// multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    db(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
  fileFilter: (req, file, cb) => {
    const type = path.extname(file.originalname);
    if (type !== ".mp4") {
      return cb(res.status(400).send("only mp4"));
    } else {
      cb(null);
    }
  },
});
const upload = multer({ storage: storage }).single("file");

module.exports = {
  post: (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.status(200).json({});
      }
    });
  },
};
