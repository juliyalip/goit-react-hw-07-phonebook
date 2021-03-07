import { createStore } from 'redux';
//import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduser from './reducer'


const store = createStore(reduser, composeWithDevTools())



export default store