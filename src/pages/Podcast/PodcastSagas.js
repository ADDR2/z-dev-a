import { call, put, takeEvery, select } from 'redux-saga/effects';
import { homeReducerKeys } from '../../reducers/homeReducer';
import { mainReducerKeys } from '../../reducers/main';
import { podcastReducerKeys } from '../../reducers/podcastReducer';
import RequestService from "../../services/RequestService";
import ResponseFormatter from '../../services/ResponseFormatter';

export const podcastSagaNames = {
    FETCH_PODCAST_DETAILS: 'PODCAST_DETAILS_&_EPISODES'
};

function* fetchPodcastDetails({ payload: { podcastId } }) {
    const { actions: { update: updateMain } } = mainReducerKeys;
    const { actions: { update: updatePodcast } } = podcastReducerKeys;
    const { actions: { update: updateHome } } = homeReducerKeys;

    try {
        yield put({ type: updateMain, payload: { navigating: true } });

        const episodes = yield call(
            RequestService.get,
            `/lookup?id=${podcastId}&entity=podcastEpisode&limit=200`,
            {},
            ResponseFormatter.formatEpisodeList
        );
        let podcasts = yield select(store => store[homeReducerKeys.name].podcasts);

        if (!Object.keys(podcasts).length) {
            podcasts = yield call(
                RequestService.get,
                '/us/rss/toppodcasts/limit=100/genre=1310/json',
                {},
                ResponseFormatter.formatPodcastList
            );
            yield put({ type: updateHome, payload: { podcasts } });
        } 

        yield put({ type: updatePodcast, payload: { ...podcasts[podcastId], episodes } });
    } catch (error) {
        console.warn(error);
    } finally {
        yield put({ type: updateMain, payload: { navigating: false } });
    }
}

function* resolvePodcastSaga() {
    yield takeEvery(podcastSagaNames.FETCH_PODCAST_DETAILS, fetchPodcastDetails);
}

export default resolvePodcastSaga;