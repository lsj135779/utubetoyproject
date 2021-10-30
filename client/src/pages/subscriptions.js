import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";

function Subscriptions({ imgs, handleClick, videoInfo }) {
  const [thumbnails, setThumbnails] = useState([]);


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
      .get(`http://localhost:4000/subscriptions/1`, {
        withCredentials: true,
      })
      .then((res) => {
        // setThumbnails(res.data);
        console.log(res.data);

        //구독자 아이디들만 받아서
      })
      .catch((err) => alert(err));
  }, []);

  return (
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
    </Body>
  );
}
export default Subscriptions;
