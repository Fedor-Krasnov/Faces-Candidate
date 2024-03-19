import React from 'react';
import { useMobileVersion } from '../../hooks';
import { mainMenuData, subMenuData } from '../../mocks';
import { Logo } from '../units';
import { Burger } from './Burger/index.js';
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
            <Burger />
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
    </header>
  );
};

export { Header };
