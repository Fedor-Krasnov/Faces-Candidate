import React from 'react';
import { ServiceSubscription, UserStatistics } from '../../innerComponets';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

// TODO: Добавить данные с бэка с помощью content

const UserProfile = () => (
  <div className={userProfileStyles[userProfileClassName]}>
    <ServiceSubscription />
    <UserStatistics />
  </div>
);

export { UserProfile };
