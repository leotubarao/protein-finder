import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Consult from '../pages/Consult';
import NotFound from '../pages/NotFound';
import Wishlist from '../pages/Wishlist';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Consult} />
    <Route path="/consultant" component={Consult} />
    <Route path="/wishlist" component={Wishlist} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
