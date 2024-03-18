import React from 'react';
import { useMobileVersion } from '../../hooks';
import { mainMenuData, subMenuData } from '../../mocks';
import { Logo } from '../units';
import headerStyles from './Header.module.scss';
import { Menu } from './Menu';
import { SearchBox } from './SearchBox';
import { UserPanel } from './UserPanel';

const headerClassName = 'header';

const Header = () => {
  const isLogged = true;
  const { isBreakpointLg } = useMobileVersion();

  return (
    <header className={headerStyles[headerClassName]}>
      <div className={headerStyles[`${headerClassName}__top-level`]}>
        {isBreakpointLg ? (
          <>
            <Logo />
            <SearchBox />
            <div>+++</div>
          </>
        ) : (
          <>
            <div className={headerStyles[`${headerClassName}__top-level-column`]}>
              <Logo className={headerStyles[`${headerClassName}__logo`]} />
              <Menu data={mainMenuData} />
            </div>
            <div className={headerStyles[`${headerClassName}__top-level-column`]}>
              <SearchBox />
              <UserPanel isLogged={isLogged} />
            </div>
          </>
        )}
      </div>
      {!isBreakpointLg ? <Menu data={subMenuData} /> : null}
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
