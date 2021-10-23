const express = require("express");
const router = express.Router();

const { showThumbnails } = require("../controllers");
const { showVideo } = require("../controllers");
//const controller

router.get("/", showThumbnails.get);
router.get("/play", showVideo.get);

module.exports = router;
