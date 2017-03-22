import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import 'material-ui';
import 'normalize-css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './assets/styles/fonts.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
