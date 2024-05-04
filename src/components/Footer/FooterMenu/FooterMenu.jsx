import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../../mocks/components/footerData';
import footerMenuStyles from './FooterMenu.module.scss';

const footerMenuClassName = 'footer-menu';

const FooterMenu = () => {
  const { footerMenu } = footerData;

  return (
    <ul className={footerMenuStyles[footerMenuClassName]}>
      {footerMenu.map(({ title, menu }, footerMenuIndex) => (
        <li key={footerMenuIndex}>
          <strong dangerouslySetInnerHTML={{ __html: title }} />
          <ul className={footerMenuStyles[`${footerMenuClassName}__menu`]}>
            {menu.map(({ link, text }, indexMenu) => (
              <li key={indexMenu}>
                <Link
                  className={footerMenuStyles[`${footerMenuClassName}__link`]}
                  dangerouslySetInnerHTML={{ __html: text }}
                  to={link}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export { FooterMenu };
