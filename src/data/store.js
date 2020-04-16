import initial from './initial';
import reducer from './reducer'; 

import { createStore, applyMiddleware, compose } from "redux";

// import thunk from "redux-thunk";

export default createStore(
    reducer,
    initial, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  );

