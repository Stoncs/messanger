import React from 'react';
import {UserCard} from '../index';

import './ShowUsersList.scss';

function ShowUsersList({users, userId, searchField, selectedUsers, setSelectedUsers}) {
  return (
    <>
      {users.map((user) => (user.id !== userId && user.username.includes(searchField)) 
        ? selectedUsers.map((selectedUser) => selectedUser.id).includes(user.id)
          ? <UserCard key={user.id} user={user} setSelectedUsers={setSelectedUsers} active={true}/>
          : <UserCard key={user.id} user={user} setSelectedUsers={setSelectedUsers}/>
        : '')}
    </>
  );
}

export default ShowUsersList;