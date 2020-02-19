import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const $container = document.getElementById("app");

ReactDOM.render(<App />, $container);