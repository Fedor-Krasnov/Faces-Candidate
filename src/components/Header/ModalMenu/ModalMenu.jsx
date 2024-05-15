import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useModalMenuContext } from '../../../contexts';
import { mainMenuData, subMenuData } from '../../../mocks';
import { Button } from '../../units/index.js';
import { Menu } from '../Menu';
import modalMenuStyles from './ModalMenu.module.scss';

const modalMenuClassName = 'modal-menu';

const ModalMenu = () => {
  const isLogged = false;
  const { isModalMenuOpen } = useModalMenuContext();

  return (
    <CSSTransition
      classNames={{
        enter: modalMenuStyles[`${modalMenuClassName}_enter`],
        enterDone: modalMenuStyles[`${modalMenuClassName}_enter`],
        exit: modalMenuStyles[`${modalMenuClassName}_exit`],
        exitDone: modalMenuStyles[`${modalMenuClassName}_exit`],
      }}
      in={isModalMenuOpen}
      timeout={1000}
      unmountOnExit
    >
      <div className={modalMenuStyles[modalMenuClassName]}>
        <div className={modalMenuStyles[`${modalMenuClassName}__content`]}>
          <div className={modalMenuStyles[`${modalMenuClassName}__menu`]}>
            <Menu data={subMenuData} isModal />
          </div>
          <div className={modalMenuStyles[`${modalMenuClassName}__menu`]}>
            <Menu data={mainMenuData} isModal />
          </div>
          {isLogged ? (
            <div></div>
          ) : (
            <div className={modalMenuStyles[`${modalMenuClassName}__authorization-section`]}>
              <Button title="Войти" />
              <p>
                Еще нет аккаунта?
                <Link className={modalMenuStyles[`${modalMenuClassName}__registration-button`]} to="tmp">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export { ModalMenu };
