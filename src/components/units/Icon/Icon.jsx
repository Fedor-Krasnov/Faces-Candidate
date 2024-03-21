import React from 'react';
import classNames from 'classnames';
import iconsSvgPath from '../../../assets/media/icons/icons.svg';
import iconStyles from './Icon.module.scss';

export const IconCode = {
  chevron: 'chevron',
  logoDesktop: 'logoDesktop',
  logoMobile: 'logoMobile',
  zoom: 'zoom',
  exit: 'exit',
  user: 'user',
  target: 'target',
  terminal: 'terminal',
  schedule: 'schedule',
  community: 'community',
  scenery: 'scenery',
  analytics: 'analytics',
  message: 'message',
  star: 'star',
  checkMark: 'checkMark',
};

const iconCodeToSize = {
  [IconCode.chevron]: [20, 20],
  [IconCode.logoDesktop]: [178, 22],
  [IconCode.logoMobile]: [35, 30],
  [IconCode.zoom]: [16, 16],
  [IconCode.exit]: [24, 24],
  [IconCode.user]: [18, 18],
  [IconCode.target]: [60, 60],
  [IconCode.terminal]: [60, 60],
  [IconCode.schedule]: [60, 60],
  [IconCode.community]: [60, 60],
  [IconCode.scenery]: [60, 60],
  [IconCode.analytics]: [60, 60],
  [IconCode.message]: [60, 60],
  [IconCode.star]: [60, 60],
  [IconCode.checkMark]: [40, 40],
};

const iconClassName = 'icon';

const Icon = ({ className, code }) => {
  const [width, height] = iconCodeToSize[code];

  return (
    <svg
      className={classNames(iconClassName, iconStyles[`${iconClassName}_${code}`], className)}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <use href={`${iconsSvgPath}#${code}`} />
    </svg>
  );
};

export { Icon };
