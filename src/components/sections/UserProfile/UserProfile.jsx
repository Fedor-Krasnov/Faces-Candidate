import React from 'react';
import { ServiceSubscription, UserStatistics, UserData } from '../../innerComponets';
import { BlockContainer } from '../../units/index.js';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = ({ content }) => {
  const { userData } = content;

  return (
    <div className={userProfileStyles[userProfileClassName]}>
      <BlockContainer>
        <UserData content={userData} />
      </BlockContainer>
      <BlockContainer>
        <ServiceSubscription content={content} />
      </BlockContainer>
      <BlockContainer>
        <UserStatistics content={content} />
      </BlockContainer>
    </div>
  );
};

export { UserProfile };
