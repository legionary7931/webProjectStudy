import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import promiseMiddlerware from "redux-promise";
import rootReducer from './redux/reducers/index';
import reduxThunk from "redux-thunk"

import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__&&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )   
    }>
      <App />
    </Provider >
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
