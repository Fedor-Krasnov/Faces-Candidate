import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Title } from '../../units';
import directionOfWorkStyles from './DirectionOfWork.module.scss';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = ({ content }) => {
  const { title, options } = content;

  return (
    <div className={directionOfWorkStyles[directionOfWorkClassName]}>
      <Title title={title} titleLevel="h2" />
      <div className={directionOfWorkStyles[`${directionOfWorkClassName}__container`]}>
        {options.map(({ icon, optionsTitle }, optionIndex) => (
          <Link key={optionIndex} className={directionOfWorkStyles[`${directionOfWorkClassName}__options`]} to="tmp">
            <div className={directionOfWorkStyles[`${directionOfWorkClassName}__icon`]}>
              <Icon code={icon} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: optionsTitle }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { DirectionOfWork };
