import React from "react";
import Header from "../components/Header";
import ReactPlayer from "react-player/lazy";
import PlayList from "../pages/playlist";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { dummyData } from "../assets/state";
import { Link } from "react-router-dom";

const Main = styled.main`
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
  img {
    width: 80px;
    height: 140px;
  }
  .thumbnail-wrapper {
    display: flex;
    padding: 10px;
    border: 1px solid gray;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

const ContentInfo = styled.div`
  /* border-style: solid;
	border-width: 1px; */
  margin: 10px 0 0 10px;
  display: flex;
  .info {
    margin-left: 10px;
    font-size: 13px;
    .info_name {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 5px;
    }
  }
`;

export default function Video({ clicked, handleClick, imgs }) {
  console.log(clicked[0].contents);
  return (
    <div>
      <Header />
      <Main>
        <Player_wrapper>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls
            url={clicked[0].contents}
            playing={true}
          />
        </Player_wrapper>
        <Playlist>
          {imgs.map((thumbnail) => (
            <Link to="/play" key={thumbnail.id} className="link">
              <div
                className="thumbnail-wrapper"
                onClick={() => handleClick(thumbnail.src)}
              >
                <img src={thumbnail.img} alt={thumbnail.name} />
                <ContentInfo>
                  <div>프로필마크</div>
                  <div className="info">
                    <div className="info_name">{thumbnail.name}</div>
                    <div>{thumbnail.username}</div>
                    <div>
                      {thumbnail.view} views - {thumbnail.created_at}
                    </div>
                  </div>
                </ContentInfo>
              </div>
            </Link>
          ))}
        </Playlist>
      </Main>
    </div>
  );
}
