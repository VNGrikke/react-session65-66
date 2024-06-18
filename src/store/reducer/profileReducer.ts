const initialUserState = {
    id: '1',
    userName: 'Nguyễn Văn Vương',
    gender: 'nam',
    dateBirth: '15/11/2005',
    address: 'Hải Dương'
  };
  
  const userReducer = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  