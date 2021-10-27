import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscription from "./pages/subscription";
import Upload from "./pages/upload";
import axios from "axios";

import "./App.css";


function App() {
  const [video, setVideo] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [contentInfo, setContentInfo] = useState(null);

<<<<<<< HEAD
  const handleClick = (src, id) => {
    if (src === "Logo") {
      setClicked(null);
    } else {
      // console.log(src);
      // console.log("$$$$$$$", id);
      axios
        .get(`http://localhost:4000/play/${id}`, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setClicked(res.data.video.contents);
        });
      // setClicked(id);
    }
=======
  const handleId = (ThumbnailInfo) => {
    setVideo(ThumbnailInfo);
>>>>>>> 36fc75dc835c5abb35d1d2ad230369d95850e2f8
  };

  useEffect(() => {
    //imgs(썸네일)만 배열로 렌더링 요청

    axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
        console.log("------", res.data);
        setImgs(res.data);
        if (video) {
          axios
            .get(`http://localhost:4000/play/${video.id}`, {
              "Content-Type": "application/json",
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
              setContentInfo(res.data);
              setVideo(res.data.video.contents);

              localStorage.setItem(
                "clickedVideo",
                JSON.stringify(res.data.video.contents)
              );
              localStorage.setItem("contentInfo", JSON.stringify(res.data));
            })
            .catch((err) => alert(err));
        }
      })
      .catch((err) => alert(err));
  }, [video]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/", { withCredentials: true })
  //     .then((res) => {
  //       console.log("------", res.data);
  //       setImgs(res.data);
  //     });
  // }, []);



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PlayList imgs={imgs} handleId={handleId} />
        </Route>
        <Route path="/play">
          <Main
            video={video}
            imgs={imgs}
            contentInfo={contentInfo}
            handleId={handleId}
            setContentInfo={setContentInfo}
            setVideo={setVideo}
          />
        </Route>
        <Route path="/subscription">
          <Subscription />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
