import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

import './Page404.scss';

export default function Page404() {
  return (
    <div className="page404 wrapper background-dark">
      <div className='page404__number'>
        404
      </div>
      <div className='page404__text'>
        Page not found.
      </div>
      <Link to={LOGIN_ROUTE}>На страницу входа</Link>
    </div>
  );
}