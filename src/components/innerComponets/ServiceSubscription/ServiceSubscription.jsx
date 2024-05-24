import React from 'react';
import { userProfileData } from '../../../mocks/sections/index.js';
import { Button, Title } from '../../units/index.js';
import serviceSubscriptionStyles from './ServiceSubscription.module.scss';

const serviceSubscriptionClassName = 'service-subscription';

const ServiceSubscription = () => {
  const { titleSubscribe, buttonTitle, subscriptionContent } = userProfileData;

  return (
    <div className={serviceSubscriptionStyles[serviceSubscriptionClassName]}>
      <Title
        className={serviceSubscriptionStyles[`${serviceSubscriptionClassName}__subscription-title`]}
        title={titleSubscribe}
        titleLevel="h4"
      />
      <div className={serviceSubscriptionStyles[`${serviceSubscriptionClassName}__subscription-content`]}>
        {subscriptionContent.map(({ validity, price }, subIndex) => (
          <div
            key={subIndex}
            className={serviceSubscriptionStyles[`${serviceSubscriptionClassName}__subscription-offers`]}
          >
            <div>
              <p dangerouslySetInnerHTML={{ __html: validity }} />
              <p dangerouslySetInnerHTML={{ __html: price }} />
            </div>
            <Button title={buttonTitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ServiceSubscription };
