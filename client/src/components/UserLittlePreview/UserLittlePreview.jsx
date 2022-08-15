import React from 'react';

import './UserLittlePreview.scss';

function UserLittlePreview({user}) {
  return (
    <div className='user-little-preview'>
      <img 
        src={process.env.REACT_APP_API_URL + user.avatar_image} 
        className='user-little-preview__image'
      />
      <div className='user-little-preview__username'>
        {user.username}
      </div>
    </div>
  );
}

export default UserLittlePreview;