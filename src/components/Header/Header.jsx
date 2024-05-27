import React, { useState } from 'react';
import { ModalMenuContext } from '../../contexts';
import { useMobileVersion } from '../../hooks';
import { mainMenuData, subMenuData } from '../../mocks';
import { Button, Logo } from '../units';
import { Burger } from './Burger';
import headerStyles from './Header.module.scss';
import { Menu } from './Menu';
import { ModalMenu } from './ModalMenu';
import { SearchBox } from './SearchBox';
import { UserPanel } from './UserPanel';

const headerClassName = 'header';

const Header = () => {
  const { isBreakpointLg } = useMobileVersion();
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  return (
    <ModalMenuContext.Provider value={{ isModalMenuOpen, setIsModalMenuOpen }}>
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
                <UserPanel />
              </div>
            </>
          )}
        </div>
        {!isBreakpointLg ? <Menu data={subMenuData} /> : null}
        {isBreakpointLg ? <ModalMenu /> : null}
      </header>
    </ModalMenuContext.Provider>
  );
};

export { Header };
