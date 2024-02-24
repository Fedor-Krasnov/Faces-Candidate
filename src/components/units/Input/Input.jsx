import React from 'react';
import './Input.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';

const inputClassName = 'input';

const Input = ({ buttonIcon, icon, placeholder, type = 'text' }) => {
  const iconElement = <Icon className={`${inputClassName}__icon`} code={icon || buttonIcon} />;

  return (
    <div className={classNames(inputClassName, { [`${inputClassName}_without-icon`]: !icon && !buttonIcon })}>
      {icon && <div className={`${inputClassName}__icon-container`}>{iconElement}</div>}
      {buttonIcon && (
        <button className={`${inputClassName}__icon-container`} type="submit">
          {iconElement}
        </button>
      )}
      <input className={`${inputClassName}__field`} placeholder={placeholder} type={type} />
    </div>
  );
};

export { Input };
