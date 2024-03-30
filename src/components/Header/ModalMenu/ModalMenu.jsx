import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useModalMenuContext } from '../../../contexts';
import modalMenuStyles from './ModalMenu.module.scss';

const modalMenuClassName = 'modal-menu';

const ModalMenu = () => {
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
          <p>modal menu</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export { ModalMenu };
