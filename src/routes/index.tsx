import React from 'react';
import { Switch, Route } from 'react-router-dom';
import main from '../pages/main';
import dashboard from '../pages/dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={main} />
      <Route path='/dashboard' component={dashboard} />
    </Switch>
  );
};

export default Routes;
