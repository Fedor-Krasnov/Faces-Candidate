import React from 'react';
import { userProfileData } from '../../../mocks/sections';
import { Button, Title } from '../../units';
import subscriptionSectionStyles from './SubscriptionSection.module.scss';

const subscriptionSectionClassName = 'subscription-section';

const SubscriptionSection = () => {
  const { titleSubscribe, buttonTitle, subscriptionContent } = userProfileData;

  return (
    <section className={subscriptionSectionStyles[subscriptionSectionClassName]}>
      <Title
        className={subscriptionSectionStyles[`${subscriptionSectionClassName}__subscription-title`]}
        title={titleSubscribe}
        titleLevel="h4"
      />
      <div className={subscriptionSectionStyles[`${subscriptionSectionClassName}__subscription-content`]}>
        {subscriptionContent.map(({ validity, price }, subIndex) => (
          <div
            key={subIndex}
            className={subscriptionSectionStyles[`${subscriptionSectionClassName}__subscription-offers`]}
          >
            <div>
              <p dangerouslySetInnerHTML={{ __html: validity }} />
              <p dangerouslySetInnerHTML={{ __html: price }} />
            </div>
            <Button title={buttonTitle} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { SubscriptionSection };
