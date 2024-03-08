import React from 'react';
import './CopyrightLinks.scss';
import { Link } from 'react-router-dom';
import { footerData } from '../../../mocks/components/footerData';

const copyrightLinksClassName = 'copyright-links';

const CopyrightLinks = () => {
  const { copyright } = footerData;

  return (
    <ul className={copyrightLinksClassName}>
      {copyright.copyrightLinks.map(({ link, text }, copyrightIndex) => (
        <li key={copyrightIndex}>
          <Link dangerouslySetInnerHTML={{ __html: text }} to={link} />
        </li>
      ))}
    </ul>
  );
};

export { CopyrightLinks };
