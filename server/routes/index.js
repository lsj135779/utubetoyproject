const express = require("express");
const router = express.Router();

const { showThumbnails, showVideo, upload } = require("../controllers");

//const controller

router.get("/", showThumbnails.get);
router.get("/play/:postId", showVideo.get);
router.post("/uploads", upload.post);

module.exports = router;
