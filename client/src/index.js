import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; 
import './index.css'
import { Provider } from "react-redux";
import store from "./components/store/index";
import App from './App';
import {AuthProvider} from './components/context/AuthProvider'

ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
     <AuthProvider>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </AuthProvider>
   </React.StrictMode>
  </Provider>,
 

  document.getElementById('root')
);

