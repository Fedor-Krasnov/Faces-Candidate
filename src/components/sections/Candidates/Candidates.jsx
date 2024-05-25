import React from 'react';
import { UserCard } from '../../innerComponets';
import { Title } from '../../units';
import candidatesStyles from './Candidates.module.scss';

const candidatesClassName = 'candidates';

const Candidates = ({ content }) => {
  const { title } = content;

  return (
    <div className={candidatesStyles[candidatesClassName]}>
      <Title className={candidatesStyles[`${candidatesClassName}__title`]} title={title} />
      <div className={candidatesStyles[`${candidatesClassName}__container`]}>
        <UserCard />
      </div>
    </div>
  );
};

export { Candidates };
