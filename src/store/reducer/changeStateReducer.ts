const initialState = {
    company: "Rikkei Academy"
};

const changeStateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_COMPANY':
            return {
                ...state,
                company: action.payload,
            };
        default:
            return state;
    }
};

export default changeStateReducer;
