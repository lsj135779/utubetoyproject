import React from "react";
import Header from "../components/Header";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
`;

const Player_wrapper = styled.div`
  flex: 0 1 auto;
  position: relative;
  height: 80vh;
  width: 80vw;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Playlist = styled.div`
  flex: 0 1 500px;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function Video({ clicked, handleClick, imgs }) {
  return (
    <>
      <Header handleClick={handleClick} />
      <Container>
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
          <VideoInfo />
        </Main>
        <Playlist>
          {imgs.map((thumbnail) => (
            <Link to="/play" key={thumbnail.id} className="link">
              <Thumbnail
                key={thumbnail.id}
                clicked={clicked}
                thumbnail={thumbnail}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </Playlist>
      </Container>
      {/* <Comments /> */}
    </>
  );
}
