const express = require("express");
const router = express.Router();

const { showThumbnails, showVideo, upload } = require("../controllers");

//const controller

router.get("/", showThumbnails.get);
router.get("/play/:postId", showVideo.get);
router.post("/uploads", upload.upload);
//router.post("/uploads/posts", upload.post);

module.exports = router;
