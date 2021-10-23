import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail'

const Title = styled.div`
  margin: 30px 50px 0px 50px;
  font-size: 30px;
  font-weight: bold;
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


export default function PlayList ({ imgs, handleClick, clicked }) {


  // console.log(imgs)

  return (
    <div>
      <Header handleClick={handleClick} />
      <Title>Recommended</Title>
      <Playlist>
        { imgs.map(thumbnail => 
          <Link to="/play" key={thumbnail.id} className="link">
          <Thumbnail key={thumbnail.id} clicked={clicked} thumbnail={thumbnail} handleClick={handleClick}/>
          </Link> )}
      </Playlist>
    </div>
  );
}