import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </main>
);

export default Main;
