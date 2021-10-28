import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
//import voooo from "../../../server"
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
  const [files, setFiles] = useState(null);
  const [check, isCheck] = useState(null);
  // const [privacy, setPrivacy] = useState();
  // const [genre, setGenre] = useState("");

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  };

  // const payload =
  // const onSubmit = () => {
  //   axios.post()
  // };

  // <Dropzone
  // onDrop={onDrop}
  // multiple={false}
  // maxSize={1000000}>
  //  {({getRootProps,getInputProps}) => {
  //    <div></div>
  //  }}
  // </Dropzone>;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //제목 입력
  const setTitle = (e) => {
    isTitle(e.target.value);
  };
  //설명 입력
  const setDescription = (e) => {
    isDescription(e.target.value);
  };
  //저장 버튼
  const payload = [];

  const addClicked = (e) => {
    // axios.post("http://localhost:4000/pots");
    if (files.length > 1) alert("하나의 파일만 업로드하세요.");
    else {
      // console.log("%%%%%%%%", files);
      // isTitle(files[0].name);
      // console.log(title);
      // console.log(files[0]);
      //없어도 올라갈거 같은데.

      //무슨 책 보세요..?
      //
      //아하...엔드포인트를 다르게 줘야하나봐요...
      //근데...그러면 서버에서 요청이 두 개가 다르게 오는데
      // 그거를 하나로 돌려주려면...
      //아니면 첫번쨰 엔드포인트는 저장을 하는 res보내주고
      //두번째 엔드포인트 애는 db에저장하고 업로드하는 애로

      const formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", files[0]);
      // formData.append("file", title);
      // formData.append("description", description);
      //console.log(formData);
      const payload = {
        formData: formData,
        userId: 1,
        image: null,
        title: title,
        description: description,
      };
      axios
        .post(`http://localhost:4000/uploads`, payload, config)
        .then((response) => {
          //posts 내용 작성
          if (response.data.success) {
            console.log(response.data);
            isCheck(response.data);
          } else {
            alert("비디오 업로드에 실패했습니다.");
          }
        });
    }
  };

  // Description과 2개의 선택상자에 대한 state를 만들어서 관리를 해야하는지 상의하기

  // 요청할 때 어떤 정보를 넣어서 보내야 하는지

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
        <input
          type="text"
          value={description}
          onChange={setDescription}
        ></input>
        <br />
        <br />
        {/* <select onChange={(e) => console.log(e.target.value)}>
          <option>선택</option>
          <option>public</option>
          <option>private</option>
        </select> */}
        <br />
        <br />
        {/* <select>
          <option>선택</option>
          <option>Film & Animation</option>
          <option>Autos & Vehicles</option>
          <option>Music</option>
          <option>Pets & Animals</option>
          <option>Sports</option>
        </select> */}
        <br />
        <br />
        <button onClick={addClicked}>Submit</button>
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
