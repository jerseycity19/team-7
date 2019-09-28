import React, {Component} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import ProfileOverview from './Profile/Overview';

import "tabler-react/dist/Tabler.css";
import './App.css';

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/profile_overview" component={ProfileOverview} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
