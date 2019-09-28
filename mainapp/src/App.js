import React, { Component } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import ProfileOverview from './Profile/Overview';
import Register from './Profile/Register';
import Chatroom from './Components/Chatroom/Chatroom';
import { Container } from 'tabler-react';
import Trending_News from './Components/Trending_News/Trending_News'

import "tabler-react/dist/Tabler.css";
import './App.css';


import Login from './Profile/Login';

const App = props => {

  
  return (
    <div>
    <Container>
      <Switch>
        <Route path="/profile_overview" component={ProfileOverview} />
        <Route path="/chatroom" component={Chatroom} />
        <Route path="/trending" component={Trending_News} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Container>
    </div>

  );
}

export default App;
