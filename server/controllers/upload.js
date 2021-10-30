const multer = require("multer");
const db = require("../models");
const { posts } = require("../models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return cb(res.status(400).send("only mp4"), false);
    } else {
      cb(null, true);
    }
  },
});
const upload = multer({ storage: storage }).single("upload");
module.exports = {
  //비디오 서버 저장
  uploads: (req, res) => {
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
      console.log(req.file)
      if (err) {
        res.status(400).json({ success: false, err });
      } else {
        // console.log(req.file)
        res.status(200).json({
          success: true,
          url: req.file.path,
          fileName: req.file.filename,
        });

      }
    });
  },
  file: async (req, res) => {
    posts.create({
      userId: req.body.userId,
      title: req.body.title,
      image: req.body.image,
      video: req.body.filePath,
      description: req.body.description
    })

    res.status(200).json({ success: true });
  }
};
