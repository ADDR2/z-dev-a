export const podcastReducerKeys = {
    name: 'podcast',
    actions: {
        create: 'PODCAST_CREATE',
        update: 'PODCAST_UPDATE',
        clear: 'PODCAST_CLEAR'
    }
};
  

const initialState = {
    name: '',
    image: '',
    largeImage: '',
    author: '',
    description: '',
    id: '',
    episodes: {},
    currentEpisode: {}
};

const PodcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case podcastReducerKeys.actions.create: return action.payload;
        case podcastReducerKeys.actions.update: return { ...state, ...action.payload };
        case podcastReducerKeys.actions.clear: return initialState;
        default: return state;
    }
};

export default PodcastReducer;