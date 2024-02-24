import React from 'react';
import classNames from 'classnames';
import iconsSvgPath from '../../../assets/media/icons/icons.svg';
import './Icon.scss';

export const IconCode = {
  zoom: 'zoom',
};

const iconCodeToSize = {
  [IconCode.zoom]: [16, 16],
};

const iconClassName = 'icon';

const Icon = ({ className, code }) => {
  const [width, height] = iconCodeToSize[code];

  return (
    <svg
      className={classNames(iconClassName, `${iconClassName}_${code}`, className)}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <use href={`${iconsSvgPath}#${code}`} />
    </svg>
  );
};

export { Icon };