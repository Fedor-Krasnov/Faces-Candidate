import React from 'react';
import './Footer.scss';
import { footerData } from '../../mocks/components/footerData';
import { CopyrightLinks } from './CopyrightLinks';
import { FooterMenu } from './FooterMenu';

const footerClassName = 'footer';

const Footer = () => {
  const { copyright } = footerData;

  return (
    <footer className={footerClassName}>
      <div className={`${footerClassName}__container`}>
        <FooterMenu />
        <div className={`${footerClassName}__copyright`}>
          <div dangerouslySetInnerHTML={{ __html: copyright.firm }} />
          <CopyrightLinks />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
