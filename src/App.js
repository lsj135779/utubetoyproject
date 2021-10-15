import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayList from './pages/playlist';
import Video from './pages/main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <PlayList />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
