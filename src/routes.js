import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';
import Main from './pages/Main';
import MovieSerie from './pages/MovieSerie';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movies-series/:id" component={MovieSerie} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
