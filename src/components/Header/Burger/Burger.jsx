import React from 'react';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => (
  <div className={burgerStyles[burgerClassName]}>
    <span />
    <span />
    <span />
  </div>
);

export { Burger };
