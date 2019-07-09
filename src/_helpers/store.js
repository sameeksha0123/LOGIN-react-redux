import {createStore, applyMiddleware} from 'redux';
import thunkMiddelware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();
export const store= createStore(rootReducer,applyMiddleware(loggerMiddleware,thunkMiddelware))