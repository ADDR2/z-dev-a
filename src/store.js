import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import MainReducer, { MainReducerKeys } from './reducers/main';

const reducer = combineReducers({
    [MainReducerKeys.name]: MainReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;