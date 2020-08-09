import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Wishlist from '../pages/Wishlist';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/wishlist" component={Wishlist} />
  </Switch>
);

export default Routes;
