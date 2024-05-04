import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../../mocks/components/footerData';
import copyrightLinksStyles from './CopyrightLinks.module.scss';

const copyrightLinksClassName = 'copyright-links';

const CopyrightLinks = () => {
  const { copyright } = footerData;

  return (
    <ul className={copyrightLinksStyles[copyrightLinksClassName]}>
      {copyright.copyrightLinks.map(({ link, text }, copyrightIndex) => (
        <li key={copyrightIndex}>
          <Link
            className={copyrightLinksStyles[`${copyrightLinksClassName}__link`]}
            dangerouslySetInnerHTML={{ __html: text }}
            to={link}
          />
        </li>
      ))}
    </ul>
  );
};

export { CopyrightLinks };
