import {configureStore, compose, applyMiddleware} from '@reduxjs/toolkit';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = configureStore({reducer: rootReducer}, composeEnhancer(applyMiddleware(thunk)));

export default store;