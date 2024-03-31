import React from 'react';
import classNames from 'classnames';
import { useModalMenuContext } from '../../../contexts';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => {
  const { isModalMenuOpen, setIsModalMenuOpen } = useModalMenuContext();

  return (
    <div className={burgerStyles[burgerClassName]}>
      <div
        className={classNames(burgerStyles[`${burgerClassName}__container`], {
          [burgerStyles[`${burgerClassName}__container-icon-close`]]: isModalMenuOpen,
        })}
        onClick={() => setIsModalMenuOpen(!isModalMenuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export { Burger };
