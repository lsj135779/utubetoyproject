const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            return cb(res.status(400).end("only mp4 is allowd"), false);
        }
        cb(null, true);
    },
})
const upload = multer({ storage: storage }).single("file");
module.export = {
    //post: (req, res) => {


    upload: (req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            url: res.req.file.path,
            fileName: res.req.file.fileName
        })
    })

    // }
}


// const multer = require("multer");
// const db = require("../models");
// const { videos } = require("../models");
// const bodyParser = require("body-parser");
// // const router = express.Router();

// /// multer

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     // console.log(req);
// //     cb(null, "uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     console.log(file);
// //     cb(null, file.originalname + "-" + Date.now());
// //   },
// //   fileFilter: (req, file, cb) => {
// //     const ext = path.extname(file.originalname);
// //     if (ext !== ".mp4") {
// //       return cb(res.status(400).send("only mp4"));
// //     } else {
// //       cb(null);
// //     }
// //   },
// // });
// // const upload = multer({ storage: storage }).single("file");
// // console.log(upload);
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

// module.exports = {
//   post: (req, res) => {
//     upload(req, res, (err) => {
//       //비디오를 서버에 저장한다.
//       console.log(req.res);

//       if (err) {
//         return res.status(400).json({ success: false, err });
//       } else {
//         // console.log(res);
//         res.status(200).json({
//           success: true,
//           url: res.req.file.path,
//           fileName: res.req.file.filename,
//         });
//       }
//     });
//   },
// }; 