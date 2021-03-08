//import { createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import rootReduser from './reducer'


//const store = createStore(reducer, composeWithDevTools());


const middleware = [...getDefaultMiddleware(), logger ]

const store = configureStore({
    reducer: rootReduser,
    middleware,
devTools: process.env.NODE_ENV === 'development'}
)


export default store



