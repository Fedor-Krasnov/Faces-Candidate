import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useModalMenuContext } from '../../../contexts';
import { mainMenuData, subMenuData } from '../../../mocks';
import { Menu } from '../Menu';
import { UserPanel } from '../UserPanel';
import modalMenuStyles from './ModalMenu.module.scss';

const modalMenuClassName = 'modal-menu';

const ModalMenu = () => {
  const isLogged = true;
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
          <Menu data={subMenuData} />
          <Menu data={mainMenuData} />
          <UserPanel isLogged={isLogged} />
          <p className={modalMenuStyles[`${modalMenuClassName}__registration`]}>
            Еще нет аккаунта?
            <a href="#">Зарегистрироваться</a>
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

export { ModalMenu };
