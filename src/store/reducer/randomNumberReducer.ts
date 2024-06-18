const initialState = {
    numbers: [] as number[],
  };
  
  const randomReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD_RANDOM_NUMBER':
        return {
          ...state,
          numbers: [...state.numbers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default randomReducer;
  