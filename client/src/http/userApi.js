import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (username, password) => {
  const {data} = await $host.post('api/users/registration', {username, password});
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const logIn = async (username, password) => {
  const {data} = await $host.post('api/users/login', {username, password});
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const {data} = await $authHost.get('api/users/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getAllUsers = async () => {
  const {data} = await $authHost.get('api/users');
  return data;
};

export const getUserById = async (userId) => {
  const {data} = await $authHost.get(`api/users/${userId}`);
  return data;
};

