import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import SearchMovie from './containers/search_movie';
import MovieDetails from './containers/movie_details';

export default (
  <Route>
    <Route exact path="/" component={App} >
      <Route exact path="/buscar_filme" component={SearchMovie} />
      <Route exact path="/resultado" component={MovieDetails} />
    </Route>
  </Route>
);


/*
/ -> Component App
/buscar_filme  -> Component Search Movie

*/
