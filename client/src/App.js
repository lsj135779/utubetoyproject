import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscription from "./pages/subscription";
import Upload from "./pages/upload";
import axios from "axios";

import "./App.css";
<<<<<<< HEAD

=======
>>>>>>> 396fba7df7720e27e605306dfdeb873f8a6f417e

function App() {
  const [videoInfo, setVideoInfo] = useState(
    JSON.parse(localStorage.getItem("clickedVideo"))
  );
  const [imgs, setImgs] = useState([]);

  const handleClick = (ThumbnailInfo) => {
    axios
      .get(`http://localhost:4000/play/${ThumbnailInfo.id}`, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem("clickedVideo", JSON.stringify(res.data));
        setVideoInfo(res.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
        setImgs(res.data);
<<<<<<< HEAD
        if (video && typeof(video) !== 'string') {
          console.log(video)
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
=======
>>>>>>> 396fba7df7720e27e605306dfdeb873f8a6f417e
      })
      .catch((err) => alert(err));
  }, [videoInfo]);



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PlayList imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/play">
          <Main videoInfo={videoInfo} imgs={imgs} handleClick={handleClick} />
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
