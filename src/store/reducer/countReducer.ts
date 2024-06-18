const initialCount: number = 0;

const countReducer = (state = initialCount, action: any) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

export default countReducer;
