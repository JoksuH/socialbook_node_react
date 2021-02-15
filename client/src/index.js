import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './Redux/curUser'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(userReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
