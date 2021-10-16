import React from 'react';
import Header from '../components/Header';
import ReactPlayer from 'react-player';
import { dummyVideos } from '../assets/videos'
import styled from 'styled-components';


export default function Video () {

  return (
    <div>
      <Header />
      <section>
      <ReactPlayer 
        width='1000px' 
        height='562.5px' 
        controls 
        url={dummyVideos.videos[0].src}
      />
      </section>
    </div>
  );
}