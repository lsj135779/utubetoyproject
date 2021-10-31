import React from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import { Link } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import Comments from "../components/Comments";

const Body = styled.div`
<<<<<<< HEAD
  padding-bottom: 150px;
`;


=======
  padding-bottom: 150px;;
`;

>>>>>>> 3c80c6f8753800836e46b6f5077fde182c7bf217
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
}
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

export default function Main({ videoInfo, handleClick, imgs, subscription, subscriptionRefresh, setSubscription }) {

  return (
    <Body>
      <Container>
        <div>
          <StyledMain>
            <PlayerWrapper>
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                controls
                url={`http://localhost:4000/${videoInfo.video}`}
                playing={true}
              />
            </PlayerWrapper>
            <VideoInfo videoInfo={videoInfo} setSubscription={setSubscription} subscription={subscription} subscriptionRefresh={subscriptionRefresh} />
          </StyledMain>
          <Comments videoInfo={videoInfo} />
        </div>
        <StyledPlaylist>
          {imgs.map((thumbnail) => (
            <Link to="/main" key={thumbnail.id} className="link">
              <Thumbnail
                style={true}
                key={thumbnail.id}
                thumbnail={thumbnail}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </StyledPlaylist>
      </Container>
<<<<<<< HEAD
      <Comments />
=======
>>>>>>> 3c80c6f8753800836e46b6f5077fde182c7bf217
    </Body>
  );
}
