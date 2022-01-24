import { call, put, takeEvery } from 'redux-saga/effects';
import { homeReducerKeys } from '../../reducers/homeReducer';
import { mainReducerKeys } from '../../reducers/main';
import RequestService from "../../services/RequestService";
import ResponseFormatter from '../../services/ResponseFormatter';

export const homeSagaNames = {
    FETCH_PODCASTS: 'HOME_TOP_PODCASTS'
};

function* fetchPodcasts() {
    const { actions: { update: updateMain } } = mainReducerKeys;
    const { actions: { update: updateHome } } = homeReducerKeys;

    try {
        yield put({ type: updateMain, payload: { navigating: true } });
        const podcasts = yield call(
            RequestService.get,
            '/us/rss/toppodcasts/limit=100/genre=1310/json',
            {},
            ResponseFormatter.formatPodcastList
        );
        yield put({ type: updateHome, payload: { podcasts } });
    } catch (error) {
        console.warn(error);
    } finally {
        yield call(() => new Promise(resolve => setTimeout(resolve, 1000)));
        yield put({ type: updateMain, payload: { navigating: false } });
    }
}

function* resolveHomeSaga() {
    yield takeEvery(homeSagaNames.FETCH_PODCASTS, fetchPodcasts);
}

export default resolveHomeSaga;