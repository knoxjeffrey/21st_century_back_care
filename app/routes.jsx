'use strict';
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Treatment from './components/Treatment.jsx';
import Contact from './components/Contact.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main} >
    <IndexRoute component={Home} />
      <Route path="/treatment" component={Treatment} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);
