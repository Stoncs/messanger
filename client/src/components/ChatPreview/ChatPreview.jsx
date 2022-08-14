import React from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import './ChatPreview.scss';
import { MESSENGER_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat } from '../../redux/actions/chats';

export default function ChatPreview({info}) {
  const chatsState = useSelector(({chats}) => chats);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const srcImage = info.avatar_image
    ? process.env.REACT_APP_API_URL + info.avatar_image
    : process.env.REACT_APP_API_URL + 'default_user_avatar.png';
  const lastMessage = info.text
    ? {
      username: info.username + ': ', 
      text: info.text, 
      date: info.date
    }
    : {
      username: '',
      text: 'Чат создан',
      date: info.createdAt
    };

  const getDateString = () => {
    const day = 86400000;
    if (Date.now() - new Date(lastMessage.date) < day) {
      return moment(lastMessage.date).format('LT');
    } else {
      return moment(lastMessage.date).calendar();
    }
  };

  const onClickChat = () => {
    localStorage.setItem('selectedChat', JSON.stringify(chatsState.selectedChat));
    dispatch(setSelectedChat({id: info.id, title: info.title}));
    navigate(MESSENGER_ROUTE + info.id);
  };

  return (
    <div 
      className={`chat-preview ${chatsState.selectedChat.id === info.id 
        ? 'active' 
        : ''}`}  
      onClick={onClickChat}>
      <div className="chat-preview__image">
        <img src={srcImage} alt="chat-preview" />
      </div>
      <div className='chat-preview__texts'>
        <div className='chat-preview__title'>{info.title}</div>
        <div className='chat-preview__text'>{lastMessage.username+ lastMessage.text}</div>
      </div>
      <div className="chat-preview__right">
        <div className='chat-preview__date'>
          {getDateString()}
        </div>
      </div>
    </div>
  );
};