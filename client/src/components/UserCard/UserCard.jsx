import React from 'react';

import './UserCard.scss';

export default function UserCard({user, setSelectedUsers, active}) {
  const onClickUserCard = () => {
    setSelectedUsers((prev) => {
      if (prev.find((selectedUser) => selectedUser.id === user.id)) {
        return prev.filter((selectedUser) => selectedUser.id !== user.id);
      } else {
        return [
          ...prev,
          {
            id: user.id,
            username: user.username,
            avatar_image:user.avatar_image
          }
        ];
      }
    });
  };
  return (
    <div className={`user-card ${active ? 'active' : ''}`} onClick={onClickUserCard}>
      <img 
        src={process.env.REACT_APP_API_URL + user.avatar_image} 
        alt="Аватарка" 
        className='user-card__image'
      />
      <div className='user-card__username'>
        {user.username}
      </div>
    </div>
  );
}