import React from 'react';
import './Title.scss';
import classNames from 'classnames';

const titleClassName = 'title';

const Title = ({ className, description, title, titleAlign, titleLevel = 'h2' }) => {
  const CustomTag = titleLevel;

  return (
    <div className={classNames(titleClassName, `${titleClassName}_text-${titleAlign}`, className)}>
      <CustomTag className={`${titleClassName}__level-${titleLevel}`} dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export { Title };
