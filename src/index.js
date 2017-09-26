import React from 'react';
import ReactDOM from 'react-dom';
import { fetchItemModel } from './util';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener('load', () => {

  fetchItemModel()
    .then((res) => {
      ReactDOM.render(<App listItems= { res.data } />, document.getElementById('root'));
      registerServiceWorker();
    });

}, false);
