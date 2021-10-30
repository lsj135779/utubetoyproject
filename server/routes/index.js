const express = require("express");
const router = express.Router();

const {
    showThumbnails,
    showVideo,
    upload,
    subscriptions,
    thumbnail
} = require("../controllers");

//const controller

router.get("/", showThumbnails.get);
router.get("/play/:postId", showVideo.get);
router.post("/upload", upload.uploads);
router.post("/subscriptions/add", subscriptions.post);
router.post("/subscriptions/delete", subscriptions.delete);
router.get("/subscriptions/:userId", subscriptions.get);
router.post("/thumbnail", thumbnail.post)
router.post("/upload/file", upload.file)
//router.post("/uploads/posts", upload.post);
//router.post("/uploads/posts", upload.post);

module.exports = router;
