const express = require("express");
const router = express.Router();

const { controller } = require("../controllers");
const controllerVideo = require("../controllers/showVideo");
//const controller

router.get("/", controller.get);
// router.get("/video/:post_id", controllerVideo.get);

module.exports = router;
