import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import './SignWindow.scss';

export default function SingIn() {
  return (
    <form className="sign-form">
      <div className='sign-form__header'>
        <h1>Войти</h1>
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
        <Link to={REGISTRATION_ROUTE}>Создать новый аккаунт</Link>
      </div>
    </form>
  );
}