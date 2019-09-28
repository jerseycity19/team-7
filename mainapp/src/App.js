import React, {Component} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';


import Dashboard from './Dashboard';

import "tabler-react/dist/Tabler.css";
import './App.css';
import ProfileOverview from './Profile/Overview';

const App = props => {
  return (

    <div>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>

    <ProfileOverview></ProfileOverview>

    </div>
  );
}

export default App;
