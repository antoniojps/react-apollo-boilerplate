import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, ExampleApollo } from 'containers';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={ExampleApollo} />
    </Switch>
  </BrowserRouter>
);

export default Router;
