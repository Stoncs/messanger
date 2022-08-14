import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../http/userApi';
import { createChat } from '../../http/chatApi';

import './NewChatWindow.scss';
import {UserCard} from '../index';

export default function NewChatWindow({setCreatingNewChat}) {
  const userId = useSelector(({user}) => user.info.id);
  const [title, setTitle] = React.useState('');
  const [searchField, setSearchField] = React.useState('');
  const [firstMessage, setFirstMessage] = React.useState('');

  const [users, setUsers] = React.useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  
  React.useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);

  const onSubmit = async () => {
    setCreatingNewChat(false);
    const userIds = [userId, ...selectedUsers.map((selectedUser) => selectedUser.id)];
    createChat(title, userIds);
  };
  return (
    <>
      <div className='blackdrop'>
      </div>
      <form className='new-chat-form' onSubmit={onSubmit}>
        <div className="new-chat-form__header">
          <label htmlFor='title'>Название</label>
          <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label htmlFor='firstMessage'>Первое сообщение</label>
          <input type='text' name='firstMessage' value={firstMessage} onChange={(e) => setFirstMessage(e.target.value)}/>
          <label htmlFor='searchUser'>Поиск по пользователям</label>
          <input type='text' name='searchUser' value={searchField} onChange={(e) => setSearchField(e.target.value)}/>
          {selectedUsers.map((selectedUser) => selectedUser.username)}
          {users.map((user) => (user.id !== userId && user.username.includes(searchField)) 
            ? <UserCard key={user.id} user={user} setSelectedUsers={setSelectedUsers}/>
            : '')}
        </div>
        <div className="new-chat-form__buttons">
          <button className='btn' onSubmit={onSubmit}>Создать</button>
          <button className='btn' onClick={() => setCreatingNewChat(false)}>Отмена</button>
        </div>
      </form>
    </>
  );
}