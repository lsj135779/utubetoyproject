import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Thumbnail from "../components/Thumbnail";
import Footer from "../components/Footer";

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Body = styled.div`
  padding-bottom: 100px;
  h1 {
    margin: 10px 50px 0 50px;
  }
`;

const Playlist = styled.div`
  border-top: 1px solid;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 50px 0 50px;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function PlayList({ handleId, imgs }) {
  return (
    <Wrap>
      <Header />
      <Body>
        <br />
        <h1>Recommended</h1>
        <Playlist>
          {imgs.map((thumbnail) => (
            <Link to="/play" className="link">
              <Thumbnail
                key={thumbnail.id}
                thumbnail={thumbnail}
                handleId={handleId}
              />
            </Link>
          ))}
        </Playlist>
      </Body>
      <Footer />
    </Wrap>
  );
}
