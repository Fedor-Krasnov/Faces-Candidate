import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import logoMobileImage from '../../../assets/media/logo/logo-mobile.png';
import logoImage from '../../../assets/media/logo/logo.png';
import { pageCheck } from '../../../helpers';

const logoClassName = 'logo';

const Logo = () => {
  const { isMainPage } = pageCheck();
  const logoElement = (
    <>
      <img alt="logo" className={`${logoClassName}__desktop`} src={logoImage} />
      <img alt="logo" className={`${logoClassName}__mobile`} src={logoMobileImage} />
    </>
  );

  return <div className={logoClassName}>{isMainPage ? logoElement : <Link to="/">{logoElement}</Link>}</div>;
};

export { Logo };
