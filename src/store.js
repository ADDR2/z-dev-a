import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import resolveHomeSaga from './pages/Home/HomeSagas';
import HomeReducer, { homeReducerKeys } from './reducers/homeReducer';
import MainReducer, { mainReducerKeys } from './reducers/main';

const reducer = combineReducers({
    [mainReducerKeys.name]: MainReducer,
    [homeReducerKeys.name]: HomeReducer
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

sagaMiddleware.run(resolveHomeSaga);

export default store;