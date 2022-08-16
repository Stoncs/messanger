import React from 'react';
import {UserLittlePreview} from '../index';

import './ShowSelectedUsers.scss';

function ShowSelectedUsers({selectedUsers}) {
  return (
    <div className='little-previews '>
      {selectedUsers.map((selectedUser) => <UserLittlePreview key={selectedUser.id} user={selectedUser} />)}
    </div>
  );
}

export default ShowSelectedUsers;