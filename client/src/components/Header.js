import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadBox = styled.header`
	height: 50px;
	/* border-style: solid;
	border-width: 2px; */
	margin: 0 10px 0 10px;
	border-bottom: 1px solid;
	display: flex;
	align-items: center;
	.left{
		flex: 0.5 0 0;
	}
	.mid{
		flex: 8 0 0;
	}
  .upload{
    margin-right: 40px;
  }
	.right{
		flex: 0.5 0 0;
	}
`;

const Img = styled.img`
  width: 50px;
  height: 30px;
`;

export default function Header() {
  return (
    <HeadBox>
      <Link to="/" className="left">
        <Img src="youtube.png" alt="Logo" />
      </Link>
      <Link to="/" className="left">
        Video
      </Link>
      <Link to="/subscription" className="head left">
        Subscription
      </Link>
      <div className="mid"></div>
      <Link to="/upload">
        <Img className="upload right" src="upload.png" alt="Upload" />
      </Link>
      <div className="right">Logout</div>
    </HeadBox>
  );
}
