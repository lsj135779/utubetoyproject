const express = require("express");
const router = express.Router();

const controllerThumbnails = require("../controllers/showThumbnails");
const controllerVideo = require("../controllers/showVideo");
//const controller

router.get("/", controllerThumbnails.get);
// router.get("/video/:post_id", controllerVideo.get);

module.exports = router;
