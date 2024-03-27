import React from 'react';
import { createPortal } from 'react-dom';
import modalStyles from './Modal.module.scss';
import { Icon, IconCode } from '../units/Icon';
import { CSSTransition } from 'react-transition-group';

const modalClassName = 'modal';

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  return createPortal(
    <CSSTransition
      classNames={{
        enter: modalStyles[`${modalClassName}_enter`],
        enterDone: modalStyles[`${modalClassName}_enter`],
        exit: modalStyles[`${modalClassName}_exit`],
        exitDone: modalStyles[`${modalClassName}_exit`],
      }}
      in={isModalOpen}
      timeout={1000}
      unmountOnExit
    >
      <div className={modalStyles[modalClassName]}>
        <div className={modalStyles[`${modalClassName}__content`]}>
          <div className={modalStyles[`${modalClassName}__close`]}>
            <span onClick={() => setIsModalOpen(false)}>
              <Icon code={IconCode.logoMobile} />
            </span>
          </div>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
};

export { Modal };
