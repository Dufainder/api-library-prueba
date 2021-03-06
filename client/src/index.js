import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; 
import { Provider } from "react-redux";
import store from "./components/store/index";
import App from './App';
import './index.css'


ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
   </React.StrictMode>
  </Provider>,
 

  document.getElementById('root')
);

