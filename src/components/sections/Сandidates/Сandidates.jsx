import React from 'react';
import { candidatesData } from '../../../mocks/sections';
import candidatesStyles from './Candidates.module.scss';

const candidatesClassName = 'candidates';

const Candidates = () => {
  const {} = candidatesData;

  return (
    <section className={candidatesStyles[candidatesClassName]}>
      <div></div>
    </section>
  );
};

export { Candidates };
