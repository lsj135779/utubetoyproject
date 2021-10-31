import React, { useState } from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  height: 100px;
  width: 100%;
  background: #dde0ea;
	bottom: 0px;
	position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 10%;
    padding: 10px 0px 10px 0px;
  }
  a {
    padding-left: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      <img src="./youtube.png" alt="유튜브"></img>
      <div>
        만든이 -
        <a href="https://github.com/lsj135779">이승준</a>
        <a href="https://github.com/Lawen-s">사범기</a>
        <a href="https://github.com/anniemon">노서정</a>
        <a href="https://github.com/rmfhsep">김정훈</a>
      </div>
      <p>Copyright 2021. Codestates all rights reserved.</p>
    </FooterBox>
  );
}