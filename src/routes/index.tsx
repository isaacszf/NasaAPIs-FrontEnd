import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DSCOVR from '../pages/DSCOVR';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={DSCOVR} path="/dscovr" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
