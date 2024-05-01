import React from 'react';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = () => <div className={userProfileStyles[userProfileClassName]}>UserProfile</div>;

export { UserProfile };
