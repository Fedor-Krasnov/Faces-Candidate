import React from 'react';
import { Button, Title } from '../../units';
import serviceSubscriptionStyles from './ServiceSubscription.module.scss';

const serviceSubscriptionClassName = 'service-subscription';

const ServiceSubscription = ({ content }) => {
  const { titleSubscribe, buttonTitle, subscriptionContent } = content;

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
              <p dangerouslySetInnerHTML={{ __html: String(validity) }} />
              <p dangerouslySetInnerHTML={{ __html: String(price) }} />
            </div>
            <Button title={buttonTitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ServiceSubscription };
