const initialState = {
  info: {},
  isAuth: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_USER':
    return {
      ...state,
      info: {...action.payload}
    };
  case 'SET_IS_AUTH':
    return {
      ...state,
      isAuth: action.payload
    };
  default:
    return {...state};
  }
};

export default user;