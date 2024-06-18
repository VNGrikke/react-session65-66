const initialProductState: any[] = [
    {
      id: '1',
      productName: 'cam',
      price: 10000,
      quatity: 5,
    },
    {
      id: '2',
      productName: 'xoài',
      price: 20000,
      quatity: 6,
    }
  ];
  
  const userReducer = (state = initialProductState, action: any) => {
    switch (action.type) {
      case 'REPAIR':
        return [...state, action.payload];
      case 'DELETE':
        return state.filter(user => user.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default userReducer;
  