import React from "react";
import styled from "styled-components";

const ThumbnailBox = styled.div`
  /* border-style: solid;
	border-width: 1px; */
  display: ${(props) => (props.className === "main" ? "flex" : null)};
  padding: ${(props) => (props.className === "main" ? "10px" : null)};
  border: ${(props) => (props.className === "main" ? "1px solid gray" : null)};
  
  img {
    margin: 10px 10px 0 10px;
    position: relative;
    cursor: pointer;
    width: ${(props) => (props.className === "main" ? "80px" : "320px")};
    height: ${(props) => (props.className === "main" ? "140px" : "220px")};
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

export default function Thumbnail({ thumbnail, handleClick, clicked }) {

  function accessPlayPage() {
    // console.log('check')
    // history.push('/play')
  }

	return(
		<ThumbnailBox className={clicked? "main" : null} onClick={() => handleClick(thumbnail.src)} >
				<img src={thumbnail.img} alt={thumbnail.name} className={clicked? "main" : "playlist"}/>
				<ContentInfo>
					<div>프로필마크</div>
					<div className="info">
						<div className="info_name">{thumbnail.name}</div>
						<div>{thumbnail.username}</div>
						<div>{thumbnail.view} views - {thumbnail.created_at}</div>
					</div>		
				</ContentInfo>		
		</ThumbnailBox>
	)
}

