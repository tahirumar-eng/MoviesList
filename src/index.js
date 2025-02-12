import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {getGenres} from './fakeGenreServices';
// console.log(getGenres);
//import Main from './Components/Main';
// import {Provider } from 'react-redux';  
// import {createStore,applyMiddleware ,combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import  App from './Movies/App';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import { searchRobots ,requestRobots } from './Reducers';

// const logger=createLogger();
// const rootReducers= combineReducers({searchRobots,requestRobots})
// const store=createStore(rootReducers  ,applyMiddleware(thunkMiddleware,logger)) 

ReactDOM.render(
               // <Provider store={store}>
               <BrowserRouter>
                <App/>
                </BrowserRouter>
                //</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
