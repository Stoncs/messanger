const initialState = {
  availableChats: [],
  selectedChat: {
    id: null,
    title: '',
  }
};

const chats = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_AVAILABLE_CHATS':
    return {
      ...state,
      availableChats: [...action.payload]
    };
  case 'SET_SELECTED_CHAT':
    return {
      ...state,
      selectedChat: {...action.payload}
    };
  default:
    return {...state};
  }
};

export default chats;