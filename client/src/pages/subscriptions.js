import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";
import Footer from "../components/Footer";

function Subscriptions({ imgs, handleClick }) {
  const [thumbnails, setThumbnails] = useState([]);

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

  const StyledPlaylist = styled.div`
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

  useEffect(() => {
    axios
      .get("http://localhost:4000/subscriptions", { withCredentials: true })
      .then((res) => {
        setThumbnails(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Wrap>
      <Body>
        <StyledPlaylist>
          {thumbnails.map((thumbnail) => (
            <Link to="/main" className="link">
              <Thumbnail
                key={thumbnail.id}
                thumbnail={thumbnail}
                handleClick={handleClick}
              />
            </Link>
          ))}
        </StyledPlaylist>
        <Footer />
      </Body>
    </Wrap>
  );
}

export default Subscriptions;
