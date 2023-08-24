import React from 'react';
import ReactDOM from 'react-dom';
import {DarkModeContextProvider} from "./context/darkModeContext";
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
       <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


