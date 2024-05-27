import React from 'react';
import { ServiceSubscription, UserStatistics } from '../../innerComponets';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = ({ content }) => {
  const { userData } = content;

  return (
    <div className={userProfileStyles[userProfileClassName]}>
      <ServiceSubscription content={content} />
      <UserStatistics content={content} />
    </div>
  );
};

export { UserProfile };
