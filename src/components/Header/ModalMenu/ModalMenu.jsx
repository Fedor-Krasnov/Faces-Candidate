import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useModalMenuContext } from '../../../contexts';
import { mainMenuData, subMenuData } from '../../../mocks';
import { Menu } from '../Menu';
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
          <div>
            <Menu data={subMenuData} isModal />
          </div>
          <div>
            <Menu data={mainMenuData} isModal />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export { ModalMenu };
