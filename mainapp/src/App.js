import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import Chatroom from './Chatroom/Chatroom';

import "tabler-react/dist/Tabler.css";
import './App.css';

const App = props => {
  return (
    <Switch>
      <Route path="/chatroom" component={Chatroom} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default App;
