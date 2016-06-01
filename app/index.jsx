//require('file?name=index.html!../templates/index.html');  // build index.html
const css = require('!css!sass!./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { browserHistory, Router, RouterContext, match } from 'react-router';

const template = require('../templates/index.hbs');
import routes from './routes.jsx'

// Client render (optional):
if (typeof document !== 'undefined') {
  const history = createHistory();
  const outlet = document.getElementById('app');

  ReactDOM.render(<Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory} routes={routes} />, outlet);
}

// have to use `module.exports`
module.exports = (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, template({
      title: locals.title,
      css: css,
      isDevServer: locals.npmMode == 'server',
      appCode: ReactDOMServer.renderToString(<RouterContext {...renderProps} />)
    }))
  })
};
