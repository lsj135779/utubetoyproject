import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";
import Loading from "../components/Loading";

<<<<<<< HEAD
const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Main = styled.main`
=======
const StyledMain = styled.main`
>>>>>>> 36fc75dc835c5abb35d1d2ad230369d95850e2f8
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
      console.log(item);
      const clicked = JSON.parse(localStorage.getItem("clickedVideo"));
      setVideo(clicked);
      localStorage.clear();
    }
  }, [video]);

  return (
<<<<<<< HEAD
    <Wrap>
      <Header handleClick={handleClick} />
      <Main>
        <Player_wrapper>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls
            url={clicked}
            playing={true}
          />
        </Player_wrapper>
        <Playlist>
=======
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
              url={video}
              playing={true}
            />
          </PlayerWrapper>
          {contentInfo ? <VideoInfo contentInfo={contentInfo} /> : <Loading />}
        </StyledMain>
        <StyledPlaylist>
>>>>>>> 36fc75dc835c5abb35d1d2ad230369d95850e2f8
          {imgs.map((thumbnail) => (
            <Link to="/play" key={thumbnail.id} className="link">
              <Thumbnail
                key={thumbnail.id}
                video={video}
                thumbnail={thumbnail}
                handleId={handleId}
              />
            </Link>
          ))}
<<<<<<< HEAD
        </Playlist>
      </Main>
      <Footer />
    </Wrap>
=======
        </StyledPlaylist>
      </Container>
      <Comments />
    </>
>>>>>>> 36fc75dc835c5abb35d1d2ad230369d95850e2f8
  );
}
