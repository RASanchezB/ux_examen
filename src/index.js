
//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
//Extras
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Necesidades
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
