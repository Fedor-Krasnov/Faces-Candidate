import React from 'react';
import classNames from 'classnames';
import iconsSvgPath from '../../../assets/media/icons/icons.svg';
import './Icon.scss';

export const IconCode = {
  chevron: 'chevron',
  logoDesktop: 'logoDesktop',
  logoMobile: 'logoMobile',
  zoom: 'zoom',
  exit: 'exit',
  user: 'user',
};

const iconCodeToSize = {
  [IconCode.chevron]: [20, 20],
  [IconCode.logoDesktop]: [178, 22],
  [IconCode.logoMobile]: [35, 30],
  [IconCode.zoom]: [16, 16],
  [IconCode.exit]: [24, 24],
  [IconCode.user]: [18, 18],
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
