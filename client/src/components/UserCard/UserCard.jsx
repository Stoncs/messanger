import React from 'react';

import './UserCard.scss';

export default function UserCard({user, setSelectedUsers}) {
  const onClickUserCard = () => {
    setSelectedUsers((prev) => {
      if (prev.find((selectedUser) => selectedUser.id === user.id)) {
        return prev.filter((selectedUser) => selectedUser.id !== user.id);
      } else {
        return [...prev, {id: user.id, username: user.username}];
      }
    });
  };
  return (
    <div className='user-card' onClick={onClickUserCard}>{user.id} {user.username} {user.avatar_image}</div>
  );
}