import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Body = styled.div`
  margin: 10px 50px 100px 50px;
  .drop {
    display: flex;
  }
  label {
    display: block;
  }
  input {
    width: 490px;
  }
`;

const Dropbox = styled.div`
  text-align: center;
  border: 1px solid;
  width: 220px;
  height: 220px;
  i {
    margin-top: 102px;
  }
`;

export default function Upload() {
  const [title, isTitle] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 1) alert("하나의 파일만 업로드하세요.");
    else isTitle(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const setTitle = (e) => {
    isTitle(e.target.value);
  };

  // Description과 2개의 선택상자에 대한 state를 만들어서 관리를 해야하는지 상의하기

  // 요청할 때 어떤 정보를 넣어서 보내야 하는지
  const postUpload = () => {
    console.log('여기서 서버에 axios로 포스트 요청을 한다.')
    let formData = new FormData();
    //const con
  }


  return (
    <Wrap>
      <Header />
      <Body>
        <div>
          <h1>Upload Video</h1>
        </div>
        <div className="drop">
          <Dropbox {...getRootProps()}>
            <input {...getInputProps()} />
            <i className="fas fa-plus"></i>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop a file here, or click</p>
            )}
          </Dropbox>
          <div>썸네일 자리</div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <input value={title} type="text" onChange={setTitle}></input>
        <br />
        <br />
        <label>Description</label>
        <input type="text"></input>
        <br />
        <br />
        <select onChange={(e) => console.log(e.target.value)}>
          <option>선택</option>
          <option>public</option>
          <option>private</option>
        </select>
        <br />
        <br />
        <select>
          <option>선택</option>
          <option>Film & Animation</option>
          <option>Autos & Vehicles</option>
          <option>Music</option>
          <option>Pets & Animals</option>
          <option>Sports</option>
        </select>
        <br />
        <br />
        <button onClick={postUpload}>Submit</button>
      </Body>
      <Footer />
    </Wrap>
  );
}
