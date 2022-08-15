import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllChatsForUser } from '../../http/chatApi';
import { setAvailableChats } from '../../redux/actions/chats';
import { setIsAuth, setUser } from '../../redux/actions/user';
import { LOGIN_ROUTE, MESSENGER_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import {ChatPreview, NewChatWindow} from '../index';

import './ChatList.scss';

export default function ChatList() {
  const user = useSelector(({user}) => user);
  const chats = useSelector(({chats}) => chats);
  const {chatId} = useParams();

  const [creatingNewChat, setCreatingNewChat] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigate(LOGIN_ROUTE);
  };

  const getPreviews = () => {
    return chats.availableChats.map((chat) => <ChatPreview key={chat.id} info={chat} />);
  };

  React.useEffect(() => {
    const compare = (a, b) => {
      if (a.date) {
        if (b.date) {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(b.createdAt) - new Date(a.date);
        }
      } else {
        if (b.date) {
          return new Date(b.date) - new Date(a.createdAt);
        } else {
          return new Date(b.createdAt - new Date(a.createdAt));
        }
      }
    };
    getAllChatsForUser(user.info.id).then(result => {
      const availableChats = result.sort(compare);
      // check if chatId from parameters not in availables chat go to MESSENGER_ROUTE
      if (chatId && !availableChats.map((chat) => chat.id).includes(Number(chatId))) {
        navigate(MESSENGER_ROUTE);
      }
      dispatch(setAvailableChats(availableChats));
    });
  }, []);

  return (
    <div className='chat-list'>
      <div className='chat-list__header'>
        <div className='chat-list__header-wrapper'>
          <button className='btn' onClick={() => setCreatingNewChat(true)}>Новый чат</button>
          <button className='btn' onClick={logout}>Выйти</button>
          <Link to={PROFILE_ROUTE}>Profile &gt;</Link>
        </div>
        <input type="text" placeholder='Поиск...'/>
      </div>
      <div className='chat-list__previews'>
        {getPreviews()}
      </div>
      { creatingNewChat ? <NewChatWindow setCreatingNewChat={setCreatingNewChat} /> : ''}
    </div>
  );
}