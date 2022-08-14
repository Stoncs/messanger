import {$authHost} from './index';

export const getAllMessagesChat = async (chatId) => {
  const {data} = await $authHost.get(`api/messages/all/${chatId}`);
  return data;
};

export const sendMessage = async (chatId, userId, text) => {
  const {data} = await $authHost.post('api/messages/', {chatId, userId, text});
  return data;
};