import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscription from "./pages/subscription";
import Upload from "./pages/upload";
import axios from "axios";

import "./App.css";
// import { use } from "../../server/routes";

function App() {
  const [imgs, isImgs] = useState([]);
  const [clicked, setClicked] = useState(null);

  // const handleClicked = (id) => {
  // console.log(id);
  // axios.get("http://localhost:4000/play").then((res) => {
  //   // console.log(res.data);
  // });
  // console.log(src);
  // };

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
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
        console.log("------", res.data);
        isImgs(res.data);
      });
  }, [clicked]);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <img src={process.env.PUBLIC_URL + '/images/thumbnail1.png'} alt="thumbnail" /> */}
      <Switch>
        <Route exact path="/">
          <PlayList clicked={clicked} imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/play">
          <Main clicked={clicked} handleClick={handleClick} imgs={imgs} />
        </Route>
        <Route path="/subscription">
          <Subscription handleClick={handleClick} />
        </Route>
        <Route path="/upload">
          <Upload handleClick={handleClick} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
