import React from 'react';
import './Header.scss';
import { mainMenuData, subMenuData } from '../../mocks';
import { Logo } from '../units';
import { Menu } from './Menu';
import { SearchBox } from './SearchBox';
import { UserPanel } from './UserPanel';

const headerClassName = 'header';

const Header = () => {
  const isLogged = false;

  return (
    <header className={headerClassName}>
      <div className={`${headerClassName}__top-level`}>
        <div className={`${headerClassName}__top-level-column`}>
          <Logo />
          <Menu data={mainMenuData} />
        </div>
        <div className={`${headerClassName}__top-level-column`}>
          <SearchBox />
          <UserPanel isLogged={isLogged} />
        </div>
      </div>
      <Menu data={subMenuData} />
      {/*
      <div className="navbar-close" id="navbar-close">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      */}
    </header>
  );
};

export { Header };
