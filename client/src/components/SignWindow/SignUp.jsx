import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';

export default function SingUp() {
  return (
    <form className="sign-form">
      <div className='sign-form__header'>
        <h1>Регистрация</h1>
        <div className='sign-form__input'>
          <label htmlFor='nickname'>Никнейм</label>
          <input type="text" name='nickname'/>
        </div>
        <div className='sign-form__input'>
          <label htmlFor='password'>Пароль</label>
          <input type="password" name='password'/>
        </div>
      </div>
      <div className='sign-form__buttons'>
        <button className='btn'>Sign in</button>
        <Link to={LOGIN_ROUTE}>Есть аккаунт? Войдите.</Link>
      </div>
    </form>
  );
}