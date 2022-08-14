import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllChatsForUser } from '../../http/chatApi';
import { setIsAuth, setUser } from '../../redux/actions/user';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/consts';
import {ChatPreview, NewChatWindow} from '../index';
import {} from 'moment';

import './ChatList.scss';

export default function ChatList({chatPreviews}) {
  const user = useSelector(({user}) => user);
  const [creatingNewChat, setCreatingNewChat] = React.useState(false);
  const [chatsInfo, setChatsInfo] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigate(LOGIN_ROUTE);
  };

  const getPreviews = () => {
    console.log(typeof chatsInfo);
    const arr = [];
    if (Array.isArray(chatsInfo))
      for (const chatInfo of chatsInfo) {
        arr.push(<ChatPreview key={chatInfo.id} info={chatInfo} />);
      }
    return arr;
  };
  React.useEffect(() => {
    getAllChatsForUser(user.info.id).then(result => setChatsInfo(result.allInfo));
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