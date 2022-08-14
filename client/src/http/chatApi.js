import {$authHost} from './index';
import jwt_decode from 'jwt-decode';

export const createChat = async (title, userIds) => {
  const {data} = await $authHost.post('api/chats/', {title, userIds});
  return data;
};

export const getAllChatsForUser = async (userId) => {
  const {data: dataChat} = await $authHost.get(`api/chats/all/${userId}`);
  const allInfo = [];
  for (const chat of dataChat) {
    const {data: lastMessage} = await $authHost.get(`api/messages/last/${chat.id}`);
    if (lastMessage[0]) {
      const {data: userInfo} = await $authHost.get(`api/users/${lastMessage[0].userId}`);
      allInfo.push({...chat, ...lastMessage[0], ...userInfo});
    } else {
      allInfo.push({...chat, ...lastMessage});
    }
  }
  return {allInfo};
};

// export const logIn = async (username, password) => {
//   const {data} = await $host.post('api/users/login', {username, password});
//   localStorage.setItem('token', data.token);
//   return jwt_decode(data.token);
// };

// export const check = async () => {
//   const {data} = await $authHost.get('api/users/auth');
//   localStorage.setItem('token', data.token);
//   return jwt_decode(data.token);
// };

