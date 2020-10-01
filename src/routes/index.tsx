import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  );
};

export default Routes;
