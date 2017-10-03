import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connectRoutes} from 'redux-first-router'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
