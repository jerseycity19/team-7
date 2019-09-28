import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import ProfileOverview from './Profile/Overview';
import Chatroom from './Components/Chatroom/Chatroom';
import Trending_News from './Components/Trending_News/Trending_News'

import "tabler-react/dist/Tabler.css";
import './App.css';

const App = props => {
  return (
    <div>
    <Switch>
      <Route path="/profile_overview" component={ProfileOverview} />
      <Route path="/chatroom" component={Chatroom} />
      <Route path="/trending" component={Trending_News} />
      <Route path="/" component={Dashboard} />
    </Switch>

    <ProfileOverview></ProfileOverview>

    </div>
  );
}

export default App;
