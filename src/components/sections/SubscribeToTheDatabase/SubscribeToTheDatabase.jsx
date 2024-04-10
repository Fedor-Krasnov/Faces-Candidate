import React from 'react';
import { subscribeToTheDatabaseData } from '../../../mocks/sections';
import { Button, Input, Title } from '../../units';
import subscribeToTheDatabaseStyles from './SubscribeToTheDatabase.module.scss';

const subscribeToTheDatabaseClassName = 'subscribe-to-the-database';

const SubscribeToTheDatabase = () => {
  const { title, description, image, questionnaire, buttonTitle } = subscribeToTheDatabaseData;

  return (
    <section className={subscribeToTheDatabaseStyles[subscribeToTheDatabaseClassName]}>
      <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__left-block-img`]}>
        <img alt={image.alt} src={image.src} />
      </div>
      <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__right-block-content`]}>
        <Title description={description} title={title} />
        {questionnaire.map(({ placeholder }, inputIndex) => (
          <Input key={inputIndex} placeholder={placeholder} />
        ))}
        <Button title={buttonTitle} />
        <div className={subscribeToTheDatabaseStyles[`${subscribeToTheDatabaseClassName}__warning`]}>
          <p>
            Отправка данной формы означает согласие с <a>Пользовательским соглашением</a> и{' '}
            <a>Политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { SubscribeToTheDatabase };
