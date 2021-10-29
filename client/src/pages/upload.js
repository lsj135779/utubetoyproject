import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ReactPlayer from "react-player/lazy";

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
  textarea {
      width: 490px;
      height: 60px;
  }
  video {
    width: 220px;
    height: 220px;
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

const PlayerWrapper = styled.div`
  flex: 0 1 auto;
  position: relative;
  height: 40vh;
  width: 40vw;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function Upload() {
  const [title, isTitle] = useState("");
  const [description, isDescription] = useState("");
  // const [selectOne, isSelectOne] = useState(null);
  // const [selectTwo, isSelectTwo] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [thumbnail, isThumbnail] = useState(null);
  const [check, isCheck] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    //if (acceptedFiles.length > 1) alert("하나의 파일만 업로드하세요.");
    // isTitle(acceptedFiles[0].name); // 영상 올리면 자동으로 타이틀이 작성됨
    setUploadFile(acceptedFiles[0]);
    let file = acceptedFiles[0];
    // console.log(file)
    /*{업로드시 썸네일 사진을 만드는 부분}*/
    let reader = new FileReader();
    reader.onloadend = (e) => {
      isThumbnail(reader.result);
      //console.log(e.currentTarget.result)
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    /*{업로드시 썸네일 사진을 만드는 부분}*/
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const setTitle = (e) => {
    isTitle(e.target.value);
  };

  const setDescription = (e) => {
    // console.log(e.target.value)
    isDescription(e.target.value);
  }


  // 서버에 요청하는 함수
  const postUpload = () => {
    const formData = new FormData();
    formData.append('upload', uploadFile);
    formData.append('userId', 1);
    formData.append('title', title);
    formData.append('description', description);
    console.log(formData)
    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`http://localhost:4000/uploads`, formData, config)
      .then((response) => {
        //posts 내용 작성
        console.log('#####', response)
        if (response.data.success) {
          console.log(response.data.url);
          isCheck(response.data);
          console.log(check);
        } else {
          alert("비디오 업로드에 실패했습니다.");
        }
      });
  };

  return (
    <Wrap>
      <Header />
      <Body>
        <div>
          <h1>Upload Video</h1>
        </div>
        <div className="drop" >
          {thumbnail ? null : <Dropbox {...getRootProps()}>
            <input {...getInputProps()} />
            <i className="fas fa-plus"></i>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop a file here, or click</p>
            )}
          </Dropbox>}
          {thumbnail ? <video src={thumbnail} alt="썸네일" /> : null}
        </div>
        <br />
        <br />
        <label>Title</label>
        <input value={title} type="text" placeholder="제목을 입력하세요" onChange={setTitle}></input>
        <br />
        <br />
        <label>Description</label>
        <textarea value={description} type="text" placeholder="설명을 입력하세요" onChange={setDescription}></textarea>

        <br />
        <br />
        <button onClick={postUpload} onDrop={onDrop}>Submit</button>
        <PlayerWrapper>
          {check ? (
            <ReactPlayer
              className="react-player"
              width="80%"
              height="80%"
              controls
              url={check.url}
              playing={true}
            />
          ) : null}
        </PlayerWrapper>
      </Body>
      <Footer />
    </Wrap>
  );
}
