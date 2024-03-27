import React, { useState } from 'react';
import { Modal } from '../../Modal';
import { ModalMenu } from '../ModalMenu';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={burgerStyles[burgerClassName]}>
      <div className={burgerStyles[`${burgerClassName}__container`]} onClick={() => setIsModalOpen(true)}>
        <span />
        <span />
        <span />
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalMenu />
      </Modal>
    </div>
  );
};

export { Burger };
