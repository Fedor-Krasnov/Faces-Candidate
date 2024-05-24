import React from 'react';
import { userCardData } from '../../../mocks/components/userCardData.js';
import { Button, Title } from '../../units/index.js';
import userCardStyles from './UserCard.module.scss';

const userCardClassName = 'user-card';

const UserCard = () => {
  const { userCard } = userCardData;

  return (
    <>
      {userCard.map(({ image, title, description, portfolio, buttonTitle, tags }, userCardIndex) => (
        <div key={userCardIndex} className={userCardStyles[userCardClassName]}>
          <div className={userCardStyles[`${userCardClassName}__tags`]}>
            <span
              className={userCardStyles[`${userCardClassName}__tag-orange`]}
              dangerouslySetInnerHTML={{ __html: tags.tags1 }}
            />
            <span
              className={userCardStyles[`${userCardClassName}__tag-purple`]}
              dangerouslySetInnerHTML={{ __html: tags.tags2 }}
            />
          </div>
          <img alt={image.alt} src={image.src} />
          <Title
            className={userCardStyles[`${userCardClassName}__title`]}
            description={description}
            title={title}
            titleLevel="h4"
          />
          <div className={userCardStyles[`${userCardClassName}__portfolio`]}>
            <p dangerouslySetInnerHTML={{ __html: portfolio.experience }} />
            <p dangerouslySetInnerHTML={{ __html: portfolio.salary }} />
          </div>
          <div className={userCardStyles[`${userCardClassName}__button`]}>
            <Button title={buttonTitle} />
          </div>
        </div>
      ))}
    </>
  );
};

export { UserCard };
