import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, MouseMoveContainer, Title } from '../../units';
import directionOfWorkStyles from './DirectionOfWork.module.scss';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = ({ content }) => {
  const { title, options } = content;

  return (
    <div className={directionOfWorkStyles[directionOfWorkClassName]}>
      <Title title={title} titleLevel="h2" />
      <div className={directionOfWorkStyles[`${directionOfWorkClassName}__container`]}>
        <MouseMoveContainer>
          <div className={directionOfWorkStyles[`${directionOfWorkClassName}__content`]}>
            {options.map(({ icon, optionsTitle, count }, optionIndex) => {
              const modificationCount = count >= 100 ? '99+' : count;

              return (
                <Link
                  key={optionIndex}
                  className={directionOfWorkStyles[`${directionOfWorkClassName}__options`]}
                  to="tmp"
                >
                  <div className={directionOfWorkStyles[`${directionOfWorkClassName}__icon`]}>
                    <Icon code={icon} />
                  </div>
                  <div
                    className={directionOfWorkStyles[`${directionOfWorkClassName}__option-title`]}
                    dangerouslySetInnerHTML={{ __html: optionsTitle }}
                  />
                  <div
                    className={directionOfWorkStyles[`${directionOfWorkClassName}__count`]}
                    dangerouslySetInnerHTML={{ __html: modificationCount }}
                  />
                </Link>
              );
            })}
          </div>
        </MouseMoveContainer>
      </div>
    </div>
  );
};

export { DirectionOfWork };
