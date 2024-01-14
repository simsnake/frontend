import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './App.css';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';


const Index = () => {
  setToLS('all-themes', themes.default);
  return(
    <App />
  )
}

ReactDOM.render(
  <Index />
  ,document.getElementById('root'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
