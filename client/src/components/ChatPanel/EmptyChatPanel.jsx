import React from 'react';

import './ChatPanel.scss';

export default function EmptyChatPanel() {
  return (
    <div className='empty-chat-panel'>
      <span>Выберите чат, чтобы отправить сообщение</span>
    </div>
  );
}