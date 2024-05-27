import React from 'react';
import userDataStyles from './UserData.module.scss';

const userDataClassName = 'user-data';

const UserData = ({ content }) => {
  const { username, subscriptionData } = content;

  return (
    <div className={userDataStyles[userDataClassName]}>
      <div>userdata</div>
    </div>
  );
};

export { UserData };
