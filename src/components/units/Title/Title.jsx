import React from 'react';
import classNames from 'classnames';
import titleStyles from './Title.module.scss';

const titleClassName = 'title';

const Title = ({ className, description, title, titleAlign, titleLevel = 'h2' }) => {
  const CustomTag = titleLevel;

  return (
    <div
      className={classNames(
        titleStyles[titleClassName],
        titleStyles[`${titleClassName}_text-${titleAlign}`],
        className,
      )}
    >
      <CustomTag
        className={titleStyles[`${titleClassName}__level-${titleLevel}`]}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export { Title };
