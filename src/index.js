import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTest from './AppTest';
import Test3 from './Test3';
import MyTest from './MyTest'
import AppFramerMotion from './AppFramerMotion';
import CallbackTest from './useCallBackTest';
import SleepMode from './SleepMode';
import CameraPwa from './CameraPwa';

ReactDOM.render(
  <React.StrictMode>
    <CameraPwa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
