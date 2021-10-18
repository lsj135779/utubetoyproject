import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail'

const Title = styled.div`
  margin: 10px;
  font-size: 24px;
`;

const Playlist = styled.div`
	border-style: solid;
	border-width: 2px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;


export default function PlayList ({ imgs }) {


  // console.log(imgs)

  return (
    <div>
      <Header />
      <Title>Recommended</Title>
      <Playlist>
        { imgs.map(thumbnail => <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />) }
      </Playlist>
    </div>
  );
}