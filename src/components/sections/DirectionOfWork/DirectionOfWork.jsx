import React from 'react';
import { Link } from 'react-router-dom';
import { directionOfWorkData } from '../../../mocks/sections';
import { Icon, Title } from '../../units';
import directionOfWorkStyles from './DirectionOfWork.module.scss';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = () => {
  const { title, options } = directionOfWorkData;

  return (
    <section className={directionOfWorkStyles[directionOfWorkClassName]}>
      <Title title={title} titleLevel="h2" />
      <div className={directionOfWorkStyles[`${directionOfWorkClassName}__container`]}>
        {options.map(({ icon, optionsTitle }, optionIndex) => (
          <Link key={optionIndex} className={directionOfWorkStyles[`${directionOfWorkClassName}__options`]} to="tmp">
            <Icon code={icon} />
            <div dangerouslySetInnerHTML={{ __html: optionsTitle }} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export { DirectionOfWork };
