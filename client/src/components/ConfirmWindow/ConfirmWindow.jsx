import React from 'react';

import './ConfirmWindow.scss';

function ConfirmWindow({info:{message, onConfirm, setConfirmationRequired}}) {
  const onClickYes = () => {
    onConfirm();
    setConfirmationRequired(false);
  };
  const onClickNo = () => {
    setConfirmationRequired(false);
  };

  return (
    <>
      <div className='blackdrop'/>
      <div className='confirm-window center-absolute'>
        <div className='confirm-window__message'>
          {message}
        </div>
        <div className='confirm-window__buttons'>
          <button className='btn' onClick={onClickYes}>Да</button>
          <button className='btn' onClick={onClickNo}>Нет</button>

        </div>
      </div>
    </>
  );
}

export default ConfirmWindow;