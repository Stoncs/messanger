import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllUsers } from '../../http/userApi';
import {InputField, UserLittlePreview, UserCard} from '../index';

import './AddingMembersWindow.scss';

function AddingMembersWindow() {
  const {userId} = useParams();
  const [allUsers, setAllUsers] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  const [searchField, setSearchField] = React.useState([]);

  React.useEffect(() => {
    getAllUsers().then((users) => setAllUsers(users));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <div className='blackdrop' />
      <form className='new-chat-form' onSubmit={onSubmit}>
        <div className="new-chat-form__header">
          <h2>Создать новый чат</h2>
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
              {selectedUsers.map((selectedUser) => <UserLittlePreview key={selectedUser.id} user={selectedUser} />)}
            </div>
            : ''
          }
        </div>
        <div className='new-chat-form__main'>
          <div className='new-chat-form__previews'>
            {allUsers.map((user) => (user.id !== userId && user.username.includes(searchField)) 
              ? selectedUsers.map((selectedUser) => selectedUser.id).includes(user.id)
                ? <UserCard key={user.id} user={user} setSelectedUsers={setSelectedUsers} active={true}/>
                : <UserCard key={user.id} user={user} setSelectedUsers={setSelectedUsers}/>
              : '')}
          </div>
        </div>
        <div className="new-chat-form__buttons">
          <button className='btn' onClick={onSubmit}>Создать</button>
          <button className='btn' onClick={console.log('отмена')} >Отмена</button>
        </div>
      </form>
    </>
  );
}

export default AddingMembersWindow;