import React, { useState } from "react"
import { useHistory } from "react-router";
import styled from "styled-components";

const ThumbnailBox = styled.div`
	/* border-style: solid;
	border-width: 1px; */
	img{
		margin: 10px 10px 0 10px;
		position: relative;
		cursor: pointer;
    width: 320px;
    height: 220px;
	}
`;

const ContentInfo = styled.div`
	/* border-style: solid;
	border-width: 1px; */
	margin: 10px 0 0 10px;
	display: flex;
	.info{
		margin-left: 10px;
		font-size: 13px;
		.info_name{
			font-size: 15px;
			font-weight: bold;
			padding-bottom: 5px;
		}
	}
`;

export default function Thumbnail({ thumbnail }) {
	const history = useHistory();


	function accessPlayPage() {
		console.log('check')
		history.push('/play')
	}
	return(
		<ThumbnailBox onClick={accessPlayPage}>
				<img src={thumbnail.img} alt={thumbnail.name} />
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