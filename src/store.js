import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import resolveHomeSaga from './pages/Home/HomeSagas';
import resolvePodcastSaga from './pages/Podcast/PodcastSagas';
import HomeReducer, { homeReducerKeys } from './reducers/homeReducer';
import MainReducer, { mainReducerKeys } from './reducers/main';
import PodcastReducer, { podcastReducerKeys } from './reducers/podcastReducer';

const reducer = combineReducers({
    [mainReducerKeys.name]: MainReducer,
    [homeReducerKeys.name]: HomeReducer,
    [podcastReducerKeys.name]: PodcastReducer
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
sagaMiddleware.run(resolvePodcastSaga);

export default store;