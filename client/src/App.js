import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayList from './pages/playlist';
import Video from './pages/main';
import Upload from './pages/upload'
import Header from './components/Header';
import { dummyData } from './assets/state'


import './App.css';


function App() {

  const [imgs, isImgs] = useState(dummyData.videos)


  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <img src={process.env.PUBLIC_URL + '/images/thumbnail1.png'} alt="thumbnail" /> */}
      <Switch>
        <Route exact path='/'>
          <PlayList imgs={imgs} />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
