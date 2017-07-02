import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Sidebar from './Sidebar';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={HomeContainer} />
      <Route path="/main" component={Sidebar} />
    </Switch>
  </main>
);

export default Main;
