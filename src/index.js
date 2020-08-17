import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'; //Load function App từ App.js
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

serviceWorker.unregister();