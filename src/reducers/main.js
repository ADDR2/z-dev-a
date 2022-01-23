export const MainReducerKeys = {
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
        case MainReducerKeys.actions.create: return action.payload;
        case MainReducerKeys.actions.update: return { ...state, ...action.payload };
        case MainReducerKeys.actions.clear: return initialState;
        default: return state;
    }
};

export default MainReducer;