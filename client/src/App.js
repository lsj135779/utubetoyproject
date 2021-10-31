import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscriptions from "./pages/subscriptions";
import Upload from "./pages/upload";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const Wrap = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

function App() {
  const [videoInfo, setVideoInfo] = useState(
    JSON.parse(localStorage.getItem("clickedVideo"))
  );
  const [imgs, setImgs] = useState([]);
  const [imgs_, setImgs_] = useState([]);
  const [style, setStyle] = useState(false);
  
  const handleClick = (ThumbnailInfo) => {
    // const imgs_one = imgs.filter(img => img.id !== ThumbnailInfo.id)
    // setImgs_(imgs_one);
    setStyle(true);
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
  }

  const pageRefresh = () => {
      axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setImgs(res.data);
        const imgs_one = res.data.filter(img => img.id !== JSON.parse(localStorage.getItem("clickedVideo")).id)
        setImgs_(imgs_one);
      })
      .catch((err) => alert(err));
  }

  useEffect(() => {
    pageRefresh();
  }, [videoInfo]);


  return (
    <BrowserRouter>
      <Wrap>
        <Header pageRefresh={pageRefresh} setStyle={setStyle}/>
        <Switch>
          <Route exact path="/">
            <PlayList imgs={imgs} handleClick={handleClick} style={style}/>
          </Route>
          <Route path="/main">
            <Main videoInfo={videoInfo} imgs={imgs_} handleClick={handleClick} style={style}/>
          </Route>
          <Route path="/subscriptions">
            <Subscriptions imgs={imgs} handleClick={handleClick} />
          </Route>
          <Route path="/upload">
            <Upload pageRefresh={pageRefresh} />
          </Route>
        </Switch>
        <Footer/>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
