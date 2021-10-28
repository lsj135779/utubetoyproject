const multer = require("multer");
const db = require("../models");
const { videos } = require("../models");
const bodyParser = require("body-parser");
// const router = express.Router();

/// multer

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // console.log(req);
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, file.originalname + "-" + Date.now());
//   },
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (ext !== ".mp4") {
//       return cb(res.status(400).send("only mp4"));
//     } else {
//       cb(null);
//     }
//   },
// });
// const upload = multer({ storage: storage }).single("file");
// console.log(upload);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(req);
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // console.log("@@@@@@@@@", file);
    console.log(file);
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return cb(res.status(400).send("only mp4"));
    } else {
      cb(null);
    }
  },
});
const upload = multer({ storage: storage }).single("file");
module.exports = {
  //비디오 서버 저장
  //post: (req, res) => {
  upload: (req, res) => {
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
      const userid = req.body.userId;
      const title = req.body.title;
      const description = req.body.description;
      console.log(req.file);

      console.log(req.body.formData);
      if (err) {
        return res.status(400).json({ success: false, err });
      } else {
        // console.log("$$$$$비디오 정보", req.file);
        // console.log(res);
        console.log(req.file);
        res.status(200).json({
          success: true,
          url: `../../../server/${req.file.path}`,
          fileName: req.file.filename,
        });
      }

      // console.log("타이틀,내용", req.body);
      // req.status(200).json({
      //   success: true,
      //   userId: userId,
      //   title: title,
      //   description: description,
    });
  },
};
