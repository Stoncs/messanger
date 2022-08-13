import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (nickname, password) => {
  const {data} = await $host.post('api/users/registration', {nickname, password});
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const logIn = async (nickname, password) => {
  const {data} = await $host.post('api/users/login', {nickname, password});
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const {data} = await $authHost.get('api/users/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

