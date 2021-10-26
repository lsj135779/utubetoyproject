import React, { useState } from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  height: 100px;
  width: 100%;
  background-color: #dde0ea;
  bottom: 0px;
  position: absolute;
  div {
    text-align: center;
    padding-top: 40px;
  }
`;

export default function Footer() {
  return (
    <FooterBox>
      <div>여기는 footer입니다.</div>
    </FooterBox>
  );
}
