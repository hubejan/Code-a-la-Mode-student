import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './MainView';
import Sidebar from './Sidebar';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={MainView} />
      <Route path="/main" component={Sidebar} />
    </Switch>
  </main>
);

export default Main;
