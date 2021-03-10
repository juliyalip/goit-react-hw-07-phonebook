import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store'

import {Provider} from 'react-redux'
//import myStore from './redux/store';

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
  {/* <PersistGate loading={null} persistor={myStore.persistor}> */}
        <App />
       {/* </PersistGate>   */}
   </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);