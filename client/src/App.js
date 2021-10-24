import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscription from "./pages/subscription";
import Upload from "./pages/upload";
import Header from "./components/Header";
import { dummyData } from "./assets/state";
import axios from "axios";

import "./App.css";


function App() {
  const [imgs, isImgs] = useState([]);
  const [clicked, setClicked] = useState(null);

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

<<<<<<< HEAD

=======
>>>>>>> d59df2209548e75801ecd18a0d86cfd60f4bbd16
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PlayList clicked={clicked} imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/play">
          <Main clicked={clicked} handleClick={handleClick} imgs={imgs} />
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
