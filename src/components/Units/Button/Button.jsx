import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';

const Button = ({ className, icon, outline, title, to, width }) => {
  const buttonClassNames = classNames(
    'button',
    { ['button_icon']: icon },
    { ['button_outline']: outline },
    { [`button_width-${width}`]: width },
    className,
  );

  const buttonTitle = (
    <>
      {icon && <Icon code={icon} />}
      {title}
    </>
  );

  return to ? (
    <Link to={to} className={buttonClassNames}>
      {buttonTitle}
    </Link>
  ) : (
    <button className={buttonClassNames}>{buttonTitle}</button>
  );
};

export { Button };
