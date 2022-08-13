import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setIsAuth, setUser} from '../../redux/actions/user';
import { logIn } from '../../http/userApi';
import { MESSANGER_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './SignWindow.scss';

export default function SignIn() {
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await logIn(nickname, password);
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
      navigate(MESSANGER_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }

  };

  return (
    <form className="sign-form" onSubmit={onSubmit}>
      <div className='sign-form__header'>
        <h1>Войти</h1>
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
        <button className='btn' onClick={onSubmit} >Войти</button>
        <Link to={REGISTRATION_ROUTE}>Создать новый аккаунт</Link>
      </div>
    </form>
  );
}