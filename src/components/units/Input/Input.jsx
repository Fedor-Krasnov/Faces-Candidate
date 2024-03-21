import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import inputStyles from './Input.module.scss';

const inputClassName = 'input';

const Input = ({ buttonIcon, className, icon, placeholder, type = 'text' }) => {
  const iconElement = <Icon className={inputStyles[`${inputClassName}__icon`]} code={icon || buttonIcon} />;

  return (
    <div
      className={classNames(
        inputClassName,
        { [inputStyles[`${inputClassName}_without-icon`]]: !icon && !buttonIcon },
        className,
      )}
    >
      {icon && <div className={inputStyles[`${inputClassName}__icon-container`]}>{iconElement}</div>}
      {buttonIcon && (
        <button className={inputStyles[`${inputClassName}__icon-container`]} type="submit">
          {iconElement}
        </button>
      )}
      <input className={inputStyles[`${inputClassName}__field`]} placeholder={placeholder} type={type} />
    </div>
  );
};

export { Input };
