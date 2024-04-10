import React from 'react';
import { subscribeToTheDatabaseData } from '../../../mocks/sections';
import subscribeToTheDatabaseStyles from './SubscribeToTheDatabase.module.scss';

const subscribeToTheDatabaseClassName = 'subscribe-to-the-database';

const SubscribeToTheDatabase = () => {
  const {} = subscribeToTheDatabaseData;

  return (
    <section className={subscribeToTheDatabaseStyles[subscribeToTheDatabaseClassName]}>
      <div></div>
    </section>
  );
};

export { SubscribeToTheDatabase };
