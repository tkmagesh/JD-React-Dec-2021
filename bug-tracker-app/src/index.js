import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './store'
import Bugs from './bugs';
import Projects from './projects';

import axios from 'axios';

//DO NOT DO THIS IN YOUR APPLICATION
window['axios'] = axios;

ReactDOM.render(
  <Provider store={store}>
    <h1>Bug Tracker</h1>
    <hr/>
    <Projects/>
    <Bugs/>
  </Provider>
, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//importing the module object from 'calc.js'
/* 
import * as calc from './calc';
console.log(calc); 
*/

/* 
import * as calc from './calc'
console.log(calc.add(100,200)); 
*/

/* 
import * as calc from './calc'
const add = calc.add;
console.log(add(100,200));  
*/

/* 
import * as calc from './calc'
const { add } = calc;
console.log(add(100,200));  
*/

/* 
import { add } from './calc'
console.log(add(1000,2000));   
*/

//importing the 'default' exported entity
/* 
import utilsObj from './calc';
console.log(utilsObj); 
*/

//importing default & non-default entities
/* 
import utils, * as calc from './calc';
console.log(utils);
console.log(calc); 
*/

/* 
import utils, {add } from './calc';
console.log(utils);
console.log(add(3000,5000));  
*/