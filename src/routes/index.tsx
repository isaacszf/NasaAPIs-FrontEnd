import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DSCOVR from '../pages/DSCOVR';
import InSightMars from '../pages/InSightMars';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={DSCOVR} path="/dscovr" />
        <Route component={InSightMars} path="/insightmars" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
