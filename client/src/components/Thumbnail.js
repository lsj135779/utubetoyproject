import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ThumbnailBox = styled.div`
  background: tomato;
  border-style: solid;
  border-width: 2px;
  img {
    /* position: relative; */
    cursor: pointer;
    width: 268.48px;
    height: 150.64px;
  }
  div {
    background: lightblue;
  }
`;

export default function Thumbnail({ thumbnail }) {
  const history = useHistory();

  function accessPlayPage() {
    console.log("check");
    history.push("/play");
  }
  return (
    <ThumbnailBox onClick={accessPlayPage}>
      <img src={thumbnail.img} alt={thumbnail.name} />
      <div>
        <div>{thumbnail.name}</div>
        <div>{thumbnail.view} views</div>
      </div>
    </ThumbnailBox>
  );
}
