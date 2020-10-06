import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers, applyMiddleware(thunkMiddleware));
