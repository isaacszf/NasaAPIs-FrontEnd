import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DSCOVR from '../pages/DSCOVR';
import APOD from '../pages/APOD';
import MarsRover from '../pages/MarsRover';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={DSCOVR} path="/dscovr" />
        <Route component={APOD} path="/apod" />
        <Route component={MarsRover} path="/marsrover" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
