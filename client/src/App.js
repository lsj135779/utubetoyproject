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
  const handleClick = (ThumbnailInfo) => {
<<<<<<< HEAD
      axios
=======
    const imgs_one = imgs.filter(img => img.id !== ThumbnailInfo.id)

    setImgs_(imgs_one);

    axios
>>>>>>> a251bddc2663de5365613ce97939f169d3129bde
      .get(`http://localhost:4000/play/${ThumbnailInfo.id}`, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem("clickedVideo", JSON.stringify(res.data));
        setVideoInfo(res.data);
      })
      .catch((err) => alert(err));
<<<<<<< HEAD
  };
=======
  }
>>>>>>> a251bddc2663de5365613ce97939f169d3129bde

  const pageRefresh = () => {
    axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
<<<<<<< HEAD
        console.log(res.data)
=======
        console.log(res.data);
>>>>>>> a251bddc2663de5365613ce97939f169d3129bde
        setImgs(res.data);
      })
      .catch((err) => alert(err));
  }

  useEffect(() => {
    pageRefresh();
  }, [videoInfo]);


  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Wrap>
        <Header />
        <Switch>
          <Route exact path="/">
            <PlayList imgs={imgs} handleClick={handleClick} />
          </Route>
          <Route path="/main">
            <Main videoInfo={videoInfo} imgs={imgs} handleClick={handleClick} />
          </Route>
          <Route path="/subscriptions">
            <Subscriptions imgs={imgs} handleClick={handleClick} />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
        <Footer/>
      </Wrap>
=======
      <Header pageRefresh={pageRefresh} />
      <Switch>
        <Route exact path="/">
          <PlayList imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/main">
          <Main videoInfo={videoInfo} imgs={imgs_} handleClick={handleClick} />
        </Route>
        <Route path="/subscriptions">
          <Subscriptions imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/upload">
          <Upload pageRefresh={pageRefresh} />
        </Route>
      </Switch>
>>>>>>> a251bddc2663de5365613ce97939f169d3129bde
    </BrowserRouter>
  );
}

export default App;
