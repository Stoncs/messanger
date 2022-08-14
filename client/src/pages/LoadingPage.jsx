import React from 'react';

import './LoadingPage.scss';

export default function LoadingPage()  {
  return (
    <div className='wrapper background-dark '> 
      <div className="spinner loading">Загрузка...</div>
    </div>
  );
}