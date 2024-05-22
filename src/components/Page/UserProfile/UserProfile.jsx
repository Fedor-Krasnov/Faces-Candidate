import React from 'react';
import { SubscriptionSection } from '../../sections/SubscriptionSection';
import { UserStatistics } from '../../sections/UserStatistics';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = () => (
  <div className={userProfileStyles[userProfileClassName]}>
    <section></section>
    <SubscriptionSection />
    <UserStatistics />
  </div>
);

export { UserProfile };
