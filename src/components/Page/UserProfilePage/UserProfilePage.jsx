import React from 'react';
import { userProfilePageData } from '../../../mocks/page';
import userProfilePageStyles from './UserProfilePage.module.scss';

const userProfilePageClassName = 'user-profile-page';

const UserProfilePage = () => {
  const {} = userProfilePageData;

  return (
    <section className={userProfilePageStyles[userProfilePageClassName]}>
      <div></div>
    </section>
  );
};

export { UserProfilePage };
