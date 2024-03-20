import React from 'react';
import { candidatesData } from '../../../mocks/sections';
import { Title } from '../../units';
import { UserCard } from '../../UserCard';
import candidatesStyles from './Candidates.module.scss';

const candidatesClassName = 'candidates';

const Candidates = () => {
  const { title } = candidatesData;

  return (
    <section className={candidatesStyles[candidatesClassName]}>
      <Title className={candidatesStyles[`${candidatesClassName}__title`]} title={title} />
      <div className={candidatesStyles[`${candidatesClassName}__container`]}>
        <UserCard />
      </div>
    </section>
  );
};

export { Candidates };
