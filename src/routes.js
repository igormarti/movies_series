import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';
import Main from './pages/Main';
import Character from './pages/Character';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
