import './App.css';

import React from 'react';
import { OAuthCallback } from 'react-oauth2-hook';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TestComponent from './TestComponent';

function App() {
  return (
    <div className="App">
      TEST 1
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/callback" component={OAuthCallback} />
          <Route path="/" component={TestComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
