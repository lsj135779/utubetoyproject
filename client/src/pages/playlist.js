import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail'


const Playlist = styled.div`
	border-style: solid;
	border-width: 2px;
	display: flex;
	flex-direction: row;
`;


export default function PlayList ({ imgs }) {


  // console.log(imgs)

  return (
    <div>
      <Header />
      <h2>Recommended</h2>
      <Playlist>
        { imgs.map(thumbnail => <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />) }
      </Playlist>
    </div>
  );
}