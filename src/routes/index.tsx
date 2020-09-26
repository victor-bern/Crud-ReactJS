import React from 'react';
import { Switch, Route } from 'react-router-dom';
import main from '../pages/main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={main} />
    </Switch>
  );
};

export default Routes;
