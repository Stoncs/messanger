import React from 'react';
import { Link } from 'react-router-dom';
import { registration } from '../../http/userApi';
import { LOGIN_ROUTE } from '../../utils/consts';

export default function SingUp() {
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registration(nickname, password);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <form className="sign-form" onSubmit={onSubmit}>
      <div className='sign-form__header'>
        <h1>Регистрация</h1>
        <div className='sign-form__input'>
          <label htmlFor='nickname'>Никнейм</label>
          <input type="text" name='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div className='sign-form__input'>
          <label htmlFor='password'>Пароль</label>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className='sign-form__buttons'>
        <button className='btn' onClick={onSubmit}>Зарегистрироваться</button>
        <Link to={LOGIN_ROUTE}>Есть аккаунт? Войдите.</Link>
      </div>
    </form>
  );
}