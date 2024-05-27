import React from 'react';
import { Avatar } from '../../units';
import userDataStyles from './UserData.module.scss';

const userDataClassName = 'user-data';

const UserData = ({ content }) => {
  const { username, subscriptionData } = content;

  return (
    <div className={userDataStyles[userDataClassName]}>
      <div className={userDataStyles[`${userDataClassName}__username`]}>
        <Avatar username={username} />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { UserData };
