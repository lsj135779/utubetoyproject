import React from "react";
import styled from "styled-components";
import axios from "axios";

const Description = styled.div`
  width: 70vw;
  margin: 20px;
`;

const Like = styled.button`
  width: max-content;
  cursor: pointer;
  height: 50px;
  margin: 10px;
  font-size: 1rem;
  color: black;
  border: none;
  border-radius: 3px;
  flex: 1 0 0;
  .fas::before {
    margin: 0.4rem;
  }
`;

const DisLike = styled(Like)`
  color: black;
  flex: 1 0 0;
`;

const ContentInfo = styled.div`
  margin: 10px 0 0 10px;
  display: flex;
  align-items: center;
  .info {
    margin-left: 10px;
    font-size: 13px;
    flex: 8 0 0;
    .info_name {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 5px;
    }
  }
`;

const Subscribe = styled(Like)`
  background: red;
  color: white;
`;

function VideoInfo({ videoInfo }) {
  console.log(videoInfo);
  const handleSubscription = () => {
    axios
      .post(
        "http://localhost:4000/subscriptions",
        { username: videoInfo.userId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <ContentInfo>
        {/* 프로필마크 twittler 스프린트에서 따오기 */}
        <div>프로필마크</div>
        <div className="info">
          <div className="info_name">{videoInfo.title}</div>
          <div>{videoInfo.user.username}</div>
          <div>
            {videoInfo.views} views - {videoInfo.createdAt.slice(0, 10)}
          </div>
        </div>
        <Like>
          <i className="fas fa-thumbs-up">{videoInfo.total_likes}</i>
        </Like>
        <DisLike>
          <i className="fas fa-thumbs-down">1,00</i>
        </DisLike>
        <Subscribe subscribe onClick={handleSubscription}>
          구독
        </Subscribe>
      </ContentInfo>
      <Description>{videoInfo.description}</Description>
    </div>
  );
}

export default VideoInfo;
