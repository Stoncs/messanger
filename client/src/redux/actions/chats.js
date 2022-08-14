// availableChats - array
export const setAvailableChats = (availableChats) => ({
  type: 'SET_AVAILABLE_CHATS',
  payload: availableChats
});


export const setSelectedChat = (selectedChat) => ({
  type: 'SET_SELECTED_CHAT',
  payload: selectedChat
});