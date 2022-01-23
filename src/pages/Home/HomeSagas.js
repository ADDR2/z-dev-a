import { call, put, takeEvery } from 'redux-saga/effects';
import { homeReducerKeys } from '../../reducers/homeReducer';
import { mainReducerKeys } from '../../reducers/main';
import RequestService from "../../services/RequestService";

export const homeSagaNames = {
    FETCH_PODCASTS: 'HOME_TOP_PODCASTS'
};

function* fetchPodcasts() {
    try {
        yield put({type: mainReducerKeys.actions.update, payload: { navigating: true }});
        const podcasts = yield call(
            RequestService.get,
            '/toppodcasts/limit=100/genre=1310/json'
        );
        yield put({type: homeReducerKeys.actions.update, payload: { podcasts }});
    } catch (error) {
        console.warn(error);
    } finally {
        yield put({type: mainReducerKeys.actions.update, payload: { navigating: false }});
    }
}

function* resolveHomeSaga() {
    yield takeEvery(homeSagaNames.FETCH_PODCASTS, fetchPodcasts);
}

export default resolveHomeSaga;