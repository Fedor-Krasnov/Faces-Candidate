import React from 'react';
import { Helmet } from 'react-helmet';
import { userProfilePageData } from '../../../mocks/page';
import userProfilePageStyles from './UserProfilePage.module.scss';

const userProfilePageClassName = 'user-profile-page';

const UserProfilePage = () => {
  const { userName } = userProfilePageData;

  return (
    <>
      <Helmet>
        <title>{userName} – Faces-Candidate</title>
      </Helmet>
      <section className={userProfilePageStyles[userProfilePageClassName]}>
        <div></div>
      </section>
    </>
  );
};

export { UserProfilePage };
