import React from 'react';
import './FooterMenu.scss';
import { Link } from 'react-router-dom';
import { footerData } from '../../../mocks/components/footerData';

const footerMenuClassName = 'footer-menu';

const FooterMenu = () => {
  const { footerMenu } = footerData;

  return (
    <ul className={footerMenuClassName}>
      {footerMenu.map(({ title, menu }, footerMenuIndex) => (
        <li key={footerMenuIndex}>
          <strong dangerouslySetInnerHTML={{ __html: title }} />
          <ul className={`${footerMenuClassName}__menu`}>
            {menu.map(({ link, text }, indexMenu) => (
              <li key={indexMenu}>
                <Link dangerouslySetInnerHTML={{ __html: text }} to={link} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export { FooterMenu };
