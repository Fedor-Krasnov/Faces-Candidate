import React from 'react';
import './Footer.scss';
import { footerData } from '../../mocks/components/footerData';

const footerClassName = 'footer';

const Footer = () => {
  const {} = footerData;

  return (
    <footer className={footerClassName}>
      <div className={`${footerClassName}__main-information`}>
        <div className={`${footerClassName}__candidates`}></div>
        <div className={`${footerClassName}__work`}></div>
        <div className={`${footerClassName}__help`}></div>
      </div>
    </footer>
  );
};

export { Footer };
