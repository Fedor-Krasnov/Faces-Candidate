import React from 'react';
import { mainMenuData, subMenuData } from '../../mocks';
import { Logo } from '../units';
import headerStyles from './Header.module.scss';
import { Menu } from './Menu';
import { SearchBox } from './SearchBox';
import { UserPanel } from './UserPanel';

const headerClassName = 'header';

const Header = () => {
  const isLogged = true;

  return (
    <header className={headerStyles[headerClassName]}>
      <div className={headerStyles[`${headerClassName}__top-level`]}>
        <div className={headerStyles[`${headerClassName}__top-level-column`]}>
          <Logo />
          <Menu data={mainMenuData} />
        </div>
        <div className={headerStyles[`${headerClassName}__top-level-column`]}>
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
