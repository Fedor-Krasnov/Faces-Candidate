import React from 'react';
import './Header.scss';
import { mainMenuData, subMenuData } from '../../mocks/components/menuData.js';
import { Logo } from '../units';
import { Menu } from './Menu';
import { SearchBox } from './SearchBox';

const headerClassName = 'header';

const Header = () => (
  <header className={headerClassName}>
    <div className={`${headerClassName}__top-level`}>
      <Logo />
      <Menu data={mainMenuData} />
      <SearchBox />
      <div className="account">
        <button className="btn btn-yellow">Войти</button>
      </div>
    </div>
    <Menu data={subMenuData} />
    <div className="navbar-close" id="navbar-close">
      <div className="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  </header>
);

export { Header };
