import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import dataReducer from './reducer/dataEnter'
import {rootSaga} from "./sagas/index.js"
import {Provider} from 'react-redux'


const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  dataReducer,
})

const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
