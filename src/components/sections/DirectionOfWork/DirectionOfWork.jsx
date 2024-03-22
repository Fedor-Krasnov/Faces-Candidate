import React from 'react';
import './DirectionOfWork.scss';
import { Link } from 'react-router-dom';
import { directionOfWorkData } from '../../../mocks/sections';
import { Icon, Title } from '../../units';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = () => {
  const { title, options } = directionOfWorkData;

  return (
    <section className={directionOfWorkClassName}>
      <Title title={title} titleLevel="h2" />
      <div className={`${directionOfWorkClassName}__container`}>
        {options.map(({ icon, optionsTitle }, optionIndex) => (
          <Link key={optionIndex} className={`${directionOfWorkClassName}__options`} to="tmp">
            <Icon code={icon} />
            <div dangerouslySetInnerHTML={{ __html: optionsTitle }} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export { DirectionOfWork };
