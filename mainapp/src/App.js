import React, {Component} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import Chatroom from './Chatroom/Chatroom'

import "tabler-react/dist/Tabler.css";
import './App.css';

const App = props => {
  return (
    <Chatroom></Chatroom>
  );
}

export default App;
