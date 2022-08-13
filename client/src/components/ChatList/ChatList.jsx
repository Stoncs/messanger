import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../utils/consts';
import {ChatPreview} from '../index';

import './ChatList.scss';

export default function ChatList({chatPreviews}) {
  return (
    <div className='chat-list'>
      <div className='chat-list__header'>
        <Link to={PROFILE_ROUTE}>Profile &gt;</Link>
        <input type="text" placeholder='Поиск...'/>
        
      </div>
      <div className='chat-list__previews'>
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
      </div>
    </div>
  );
}