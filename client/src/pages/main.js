import React from 'react';
import Header from '../components/Header';
import ReactPlayer from 'react-player';
import { dummyVideos } from '../assets/videos'
import PlayList from '../pages/playlist';
import styled from 'styled-components';
import Thumbnail from '../components/Thumbnail';
import { dummyData } from '../assets/state'

const Main = styled.main`
  display: flex;
`;

const Playlist = styled.div`
	border-style: solid;
	border-width: 2px;
	display: flex;
	flex-direction: column;
  width: 600px;
  max-height: 920px;
  img {
    width: 80px;
    height: 140px;
  }
`;

const ThumbnailBox = styled.div`
	border-style: solid;
	border-width: 2px;
	margin: 10px;
	button{
		cursor: pointer;
		img{
		}
	}
`;

export default function Video () {

  return (
    <div>
      <Header />
      <Main>
      <ReactPlayer 
        width='1000px' 
        height='562.5px' 
        controls 
        url={dummyVideos.videos[0].src}
      />
      <Playlist>
        { dummyData.videos.map(thumbnail => 
            <button>
            <img src={thumbnail.img} alt={thumbnail.name} />
            <div>{thumbnail.name}</div>
            <div>{thumbnail.view} views</div>
          </button> 
        )}
      </Playlist>
      </Main>
    </div>
  );
}