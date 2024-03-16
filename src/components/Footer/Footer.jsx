import React from 'react';
import { footerData } from '../../mocks/components/footerData';
import { CopyrightLinks } from './CopyrightLinks';
import footerStyles from './Footer.module.scss';
import { FooterMenu } from './FooterMenu';

const footerClassName = 'footer';

const Footer = () => {
  const { copyright } = footerData;

  return (
    <footer className={footerStyles[footerClassName]}>
      <div className={footerStyles[`${footerClassName}__container`]}>
        <FooterMenu />
        <div className={footerStyles[`${footerClassName}__copyright`]}>
          <div dangerouslySetInnerHTML={{ __html: copyright.firm }} />
          <CopyrightLinks />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
