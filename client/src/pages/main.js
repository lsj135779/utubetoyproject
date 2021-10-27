import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
`;

const PlayerWrapper = styled.div`
  flex: 0 1 auto;
  position: relative;
  height: 80vh;
  width: 75vw;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const StyledPlaylist = styled.div`
  flex: 0 1 500px;
  /* border-style: solid;
  border-width: 2px; */
  display: flex;
  flex-direction: column;
  .link {
    text-decoration: none;
    color: black;
  }
`;

<<<<<<< HEAD
export default function Main({
  video,
  setVideo,
  setContentInfo,
  handleId,
  imgs,
  contentInfo,
}) {
  useEffect(() => {
    //비디오 가져오기 + 조회수 올리기
    // const src = localStorage.getItem("clickedVideo");
    if (!video) {
      const item = JSON.parse(localStorage.getItem("contentInfo"));
      setContentInfo(item);
      
      // console.log(item);
      const clicked = JSON.parse(localStorage.getItem("clickedVideo"));
      setVideo(clicked);
    }
  }, [video]);

=======
export default function Main({ videoInfo, handleClick, imgs }) {
>>>>>>> 396fba7df7720e27e605306dfdeb873f8a6f417e
  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          <PlayerWrapper>
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              controls
              url={videoInfo.video.contents}
              playing={true}
            />
          </PlayerWrapper>
          <VideoInfo videoInfo={videoInfo} />
        </StyledMain>
        <StyledPlaylist>
          {imgs.map((thumbnail) => (
            <Link to="/play" key={thumbnail.id} className="link">
              <Thumbnail
                key={thumbnail.id}
                videoInfo={videoInfo}
                thumbnail={thumbnail}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </StyledPlaylist>
      </Container>
      <Comments />
    </>
  );
}
