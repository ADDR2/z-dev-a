export const homeReducerKeys = {
    name: 'home',
    actions: {
        create: 'HOME_CREATE',
        update: 'HOME_UPDATE',
        clear: 'HOME_CLEAR'
    }
};
  

const initialState = {
    podcasts: []
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case homeReducerKeys.actions.create: return action.payload;
        case homeReducerKeys.actions.update: return { ...state, ...action.payload };
        case homeReducerKeys.actions.clear: return initialState;
        default: return state;
    }
};

export default HomeReducer;