import React from "react";
import styled from "styled-components";
// import ContentInfo from "./Thumbnail";

const Description = styled.div`
  width: 70vw;
  margin: 20px;
`;

const Like = styled.button`
  width: fit-content;
  height: 50px;
  margin: 10px;
  font-size: 1rem;
  color: white;
  background: black;
  border: none;
  border-radius: 3px;
  flex: 1 0 0;
  .fas::before {
    margin: 0.4rem;
  }
`;

const DisLike = styled(Like)`
  color: red;
  flex: 1 0 0;
`;

const ContentInfo = styled.div`
  /* border-style: solid;
	border-width: 1px; */
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

function VideoInfo() {
  return (
    <div>
      <ContentInfo>
        {/* 프로필마크 twittler 스프린트에서 따오기 */}
        {/* ContentInfo 컴포넌트 최대한 재활용 */}
        <div>프로필마크</div>
        <div className="info">
          <div className="info_name">영상제목</div>
          <div>유저이름</div>
          <div>조회수 - 업로드 날짜</div>
        </div>
        <Like>
          <i className="fas fa-thumbs-up">330</i>
        </Like>
        <DisLike>
          <i className="fas fa-thumbs-down">1,300</i>
        </DisLike>
      </ContentInfo>
      <Description>어쩌구저쩌구 쌸라쌸랴 영상 설명 나간다</Description>
    </div>
  );
}

export default VideoInfo;
