export const mainReducerKeys = {
    name: 'main',
    actions: {
        create: 'MAIN_CREATE',
        update: 'MAIN_UPDATE',
        clear: 'MAIN_CLEAR'
    }
};
  

const initialState = {
    navigating: false
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case mainReducerKeys.actions.create: return action.payload;
        case mainReducerKeys.actions.update: return { ...state, ...action.payload };
        case mainReducerKeys.actions.clear: return initialState;
        default: return state;
    }
};

export default MainReducer;