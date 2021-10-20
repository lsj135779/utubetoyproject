import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayList from './pages/playlist';
import Main from './pages/main';
import Subscription from './pages/subscription'
import Upload from './pages/upload'
import Header from './components/Header';
import { dummyData } from './assets/state'


import './App.css';


function App() {

  const [imgs, isImgs] = useState(dummyData.videos)
  const [clicked, setClicked] = useState(null)

  const handleClick = (src) => {
    setClicked(src)
  }

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <img src={process.env.PUBLIC_URL + '/images/thumbnail1.png'} alt="thumbnail" /> */}
      <Switch>
        <Route exact path='/'>
          <PlayList imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path='/play'>
          <Main clicked={clicked} handleClick={handleClick}/>
        </Route>
        <Route path='/subscription'>
          <Subscription />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
