import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bugs/actions'
import store from './store'
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const bugs = store.getState();
    ReactDOM.render(
        <Bugs bugs={bugs} {...bugActionDispatchers}/>
    , document.getElementById('root'))
}
renderApp();
store.subscribe(renderApp);

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