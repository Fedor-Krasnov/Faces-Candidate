import React from 'react';
import { SubscriptionSection } from '../../sections/SubscriptionSection';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = () => (
  <div className={userProfileStyles[userProfileClassName]}>
    <section></section>
    <SubscriptionSection />
    <section></section>
  </div>
);

export { UserProfile };
