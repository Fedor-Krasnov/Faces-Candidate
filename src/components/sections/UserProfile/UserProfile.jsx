import React from 'react';
import { ServiceSubscription } from '../../innerComponets/ServiceSubscription';
import { UserStatistics } from '../../innerComponets/UserStatistics';
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
