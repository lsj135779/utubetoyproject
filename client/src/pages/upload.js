import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
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
  const [thumbnail, isThumbnail] =useState(null);
  const [filePath, setFilePath] = useState(null);

  const history = useHistory();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 1) alert("하나의 파일만 업로드하세요.");
    else {
      // console.log(acceptedFiles)
      let file = acceptedFiles[0];
      if (!file.type.includes('video')) alert("비디오 파일만 업로드하세요.")
      else {
        isTitle(acceptedFiles[0].name);
        
        // 서버에 동영상 저장요청
        const formData = new FormData();
        formData.append('upload', file);
        const config = {
          header: { "content-type": "multipart/form-data" },
        };
        axios.post(`http://localhost:4000/upload`, formData, config)
        .then((response) => {
          if (response.data.success) {
            // console.log(response.data);
            setFilePath(response.data.url);
            const payload = {
              url: response.data.url,
              fileName: response.data.fileName,
            }
            axios.post(`http://localhost:4000/thumbnail`, payload)
            .then(response => {
              if (response.data.success) {
                isThumbnail(response.data.url)
              } else {
                alert('썸네일 생성에 실패했습니다.')
              }
            })
          } else {
            alert("비디오 업로드에 실패했습니다.");
          }
        });
      }
    }
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
     const payload = {
      userId: 1,
      title: title,
      image: thumbnail,
      filePath: filePath,
      description: description,
    };
    axios.post(`http://localhost:4000/upload/file`, payload)
    .then((response) => {
      if(response.data.success) {
        console.log(response.data);
        history.push('/');
      }
      else {
        console.log('업로드 실패')
      }
    })
  };
  
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
          {thumbnail ? <img src={`http://localhost:4000/${thumbnail}`} alt="썸네일"></img> : null}
        </div>      
        <br />
        <br />
        <label>Title</label>
        <input value={title} type="text" placeholder="제목을 입력하세요" onChange={setTitle}></input>
        <br/>
        <br/>
        <label>Description</label> 
        <textarea value={description} type="text" placeholder="설명을 입력하세요" onChange={setDescription}></textarea>
        <br/>
        <br />
        <button onClick={postUpload} >Submit</button>
        {/* <PlayerWrapper>
          {filePath ? (
            <ReactPlayer
              className="react-player"
              width="80%"
              height="80%"
              controls
              url={`http://localhost:4000/${filePath}`}
              playing={true}
            />
          ) : null}
        </PlayerWrapper> */}
      </Body>
      <Footer />
    </Wrap>
  );
}
