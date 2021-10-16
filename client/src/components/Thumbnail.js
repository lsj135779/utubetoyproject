import React from "react"
import styled from "styled-components";

const ThumbnailBox = styled.div`
	border-style: solid;
	border-width: 2px;
	margin: 10px;
	button{
		cursor: pointer;
		img{
			max-width: 100%;
		}
	}
`;

export default function Thumbnail({ thumbnail }) {

	console.log(thumbnail);	
	return(
		<ThumbnailBox>
			<button>
				<img src={thumbnail.img} alt={thumbnail.name} />
				<div>{thumbnail.name}</div>
				<div>{thumbnail.view} views</div>
			</button>
		</ThumbnailBox>
	)
}