import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../http/userApi';
import { createChat } from '../../http/chatApi';

import './NewChatWindow.scss';
import {ShowUsersList, InputField, ShowSelectedUsers} from '../index';

export default function NewChatWindow({setCreatingNewChat}) {
  const userId = useSelector(({user}) => user.info.id);
  const [title, setTitle] = React.useState('');
  const [searchField, setSearchField] = React.useState('');

  const [users, setUsers] = React.useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  
  React.useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title && selectedUsers.length) {
      setCreatingNewChat(false);
      const userIds = [userId, ...selectedUsers.map((selectedUser) => selectedUser.id)];
      createChat(title, userIds);
    }
  };
  return (
    <>
      <div className='blackdrop' />
      <form className='new-chat-form' onSubmit={onSubmit}>
        <div className="new-chat-form__header">
          <h2>Создать новый чат</h2>
          <div className='new-chat-form__input'>
            <InputField 
              type='text' 
              name='title' 
              labelText='Название'
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              onSubmit={(e) => e.preventDefault()}/>
          </div >
          <div className='new-chat-form__input search'>
            <InputField 
              type='text' 
              name='search' 
              labelText='Поиск по пользователям'
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)} 
              onSubmit={(e) => e.preventDefault()}/>
          </div>
          {selectedUsers.length
            ? <div className='new-chat-form__little-previews '>
              <ShowSelectedUsers selectedUsers={selectedUsers} />
            </div>
            : ''
          }
        </div>
        <div className='new-chat-form__main'>
          <div className='new-chat-form__previews'>
            <ShowUsersList users={users} userId={userId} searchField={searchField} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} /> 
          </div>
        </div>
        <div className="new-chat-form__buttons">
          <button className='btn' onClick={onSubmit}>Создать</button>
          <button className='btn' onClick={() => setCreatingNewChat(false)}>Отмена</button>
        </div>
      </form>
    </>
  );
}