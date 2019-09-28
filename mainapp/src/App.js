import React, { Component } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';


import Dashboard from './Dashboard';
import Chatroom from './Components/Chatroom/Chatroom';

import "tabler-react/dist/Tabler.css";
import './App.css';


import Login from './Profile/Login';

const App = props => {

  
  return (

    <div>
    <Switch>
      <Route path="/chatroom" component={Chatroom} />
      <Route path="/" component={Dashboard} />
    </Switch>

    </div>
  );
}

export default App;
