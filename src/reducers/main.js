export const MainActions = {
    create: 'MAIN_CREATE',
    update: 'MAIN_UPDATE',
    clear: 'MAIN_CLEAR'
};
  

const initialState = {
    navigating: false
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case MainActions.create: return action.payload;
        case MainActions.update: return { ...state, ...action.payload };
        case MainActions.clear: return initialState;
        default: return state;
    }
};

export default MainReducer;