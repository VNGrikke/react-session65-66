const initialState = {
    darkMode: false
};

const darkModeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

export default darkModeReducer;
