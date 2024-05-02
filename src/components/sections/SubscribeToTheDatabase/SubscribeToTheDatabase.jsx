import React from 'react';
import { Button, Input, Title } from '../../units';
import subscribeToTheDatabaseStyles from './SubscribeToTheDatabase.module.scss';

const subscribeToTheDatabaseClassName = 'subscribe-to-the-database';

const SubscribeToTheDatabase = ({ content }) => {
  const { title, description, image, questionnaire, buttonTitle, href } = content;

  return (
    <div className={subscribeToTheDatabaseStyles[subscribeToTheDatabaseClassName]}>
      <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__left-block-img`]}>
        <img alt={image.alt} src={image.src} />
      </div>
      <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__right-block-content`]}>
        <div
          className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__right-block-content-container`]}
        >
          <Title
            className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__title`]}
            description={description}
            title={title}
            titleLevel="h2"
          />
          <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__questionnaire`]}>
            {questionnaire.map(({ placeholder }, inputIndex) => (
              <Input key={inputIndex} placeholder={placeholder} />
            ))}
          </div>
          <Button title={buttonTitle} width="fill" />
        </div>
        <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__warning`]}>
          <p>
            Отправка данной формы означает согласие с <a href={href.src1}>Пользовательским соглашением</a> и{' '}
            <a href={href.src2}>Политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export { SubscribeToTheDatabase };
