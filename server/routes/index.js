const express = require("express");
const router = express.Router();

const { showThumbnails, showVideo, uploads } = require("../controllers");
//const { showVideo } = require("../controllers");
//const controller

router.get("/", showThumbnails.get);
router.get("/play/:postId", showVideo.get);
//router.post("/upload", uploads.post);

module.exports = router;
