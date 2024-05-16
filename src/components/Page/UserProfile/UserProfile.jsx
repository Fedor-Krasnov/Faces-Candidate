import React from 'react';
import { userProfileData } from '../../../mocks/sections';
import { Button, Title } from '../../units';
import userProfileStyles from './UserProfile.module.scss';

const userProfileClassName = 'user-profile';

const UserProfile = () => {
  const { title, buttonTitle, subscriptionContent } = userProfileData;

  return (
    <div className={userProfileStyles[userProfileClassName]}>
      <section></section>
      <section className={userProfileStyles[`${userProfileClassName}__subscription-section`]}>
        <Title
          className={userProfileStyles[`${userProfileClassName}__subscription-title`]}
          title={title}
          titleLevel="h4"
        />
        <div className={userProfileStyles[`${userProfileClassName}__subscription-content`]}>
          {subscriptionContent.map(({ validity, price }, subIndex) => (
            <div key={subIndex} className={userProfileStyles[`${userProfileClassName}__subscription-offers`]}>
              <div>
                <p dangerouslySetInnerHTML={{ __html: validity }} />
                <p dangerouslySetInnerHTML={{ __html: price }} />
              </div>
              <Button title={buttonTitle} />
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </div>
  );
};

export { UserProfile };
