import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import Sidebar from './Sidebar';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/main" component={Sidebar} />
    </Switch>
  </main>
);

export default Main;
