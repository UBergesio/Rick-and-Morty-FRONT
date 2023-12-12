import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
import store from './components/redux/store';
import { Provider } from 'react-redux';
import axios from "axios";

/* axios.defaults.baseURL = "http://localhost:3001"; */
axios.defaults.baseURL =
  "https://rick-and-morty-back-production-2ae1.up.railway.app";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
