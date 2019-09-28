import React, { Component } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';


import Dashboard from './Components/Dashboard/Dashboard';
import ReactDOM from "react-dom";
import ProfileOverview from './Profile/Overview';
import Register from './Profile/Register';
import Login from './Profile/Login';
import Chatroom from './Components/Chatroom/Chatroom';
import { Container } from 'tabler-react';
import Trending_News from './Components/Trending_News/Trending_News';
import LoginControl from './Components/LoginControl';
import "tabler-react/dist/Tabler.css";
import './App.css';



const App = props => {

  
  return (
    <div>
      
      <Container>
        <Switch>
        <Route path="/trending" component={Trending_News} />
        <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile_overview" component={ProfileOverview} />
          <Route path="/chatroom" component={Chatroom} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Container>

    </div>

  );
}

export default App;
