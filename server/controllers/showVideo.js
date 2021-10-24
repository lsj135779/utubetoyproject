const { posts } = require("../models");
const { videos } = require("../models");

module.exports = {
  get: async (req, res) => {
    //posts 테이블 안에 findOne으로 {where: {id : req.body.id}}
    //posts 영상들과 정보들이 있는디,
    //videos
    const postId = req.params.postId;
    // console.log(postId);

    if (!postId) {
      return res.status(401).send("invalid video");
    } else {
      const result = await videos.findOne({ where: { postId: postId } });
      console.log(result.contents);
      res.status(200).json(result);
    }
  },
};
//get:=> posts, videos 를 가져와야된다고 생각합니다.
// get 읽기
// post 쓰기
