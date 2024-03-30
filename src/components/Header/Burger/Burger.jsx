import React from 'react';
import { useModalMenuContext } from '../../../contexts';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => {
  const { isModalMenuOpen, setIsModalMenuOpen } = useModalMenuContext();

  return (
    <div className={burgerStyles[burgerClassName]}>
      <div
        className={burgerStyles[`${burgerClassName}__container`]}
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
