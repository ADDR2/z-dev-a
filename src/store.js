import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import MainReducer from './reducers/main';

const reducer = combineReducers({
    main: MainReducer
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