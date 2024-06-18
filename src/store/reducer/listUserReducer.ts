const initialUserState: any[] = [
    {
      id: '1',
      userName: 'Nguyễn Văn A',
      gender: 'Nam',
      dateBirth: '2023-11-20',
      address: 'Thanh Xuân, Hà Nội'
    },
    {
      id: '2',
      userName: 'Nguyễn Thị B',
      gender: 'Nữ',
      dateBirth: '2023-11-20',
      address: 'Cầu Giấy, Hà Nội'
    }
  ];
  
  const userReducer = (state = initialUserState, action: any) => {
    switch (action.type) {
      case 'REPAIR_USER':
        return [...state, action.payload];
      case 'DELETE_USER':
        return state.filter(user => user.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default userReducer;
  