const { posts, users, videos } = require("../models");

module.exports = {
  get: (req, res) => {
    //posts 테이블 안에 findOne으로 {where: {id : req.body.id}}
    //posts 영상들과 정보들이 있는디,
    //videos
    const postId = req.params.postId;
    console.log('~~~~~~~~~~~~', postId);

    if (!postId) {
      return res.status(401).send("invalid video");
    } else {
      posts
        .findOne({
          where: { id: postId },
          include: [
            { model: videos, attributes: ["contents"] },
            { model: users, attributes: ["username"] },
          ],
        })
        .then((response) => {
<<<<<<< HEAD
          response.update({ views: response.views + 1 });
          console.log("!!!!!!!!!!", response.views);
          res.status(200).send(response);
=======
          response
            .update({ views: Number(response.views) + 1 })
            .then((data) => {
              res.status(200).json(data.dataValues);
            });
>>>>>>> 396fba7df7720e27e605306dfdeb873f8a6f417e
        });
    }
  },
};
//get:=> posts, videos 를 가져와야된다고 생각합니다.
// get 읽기
// post 쓰기
