import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import { pageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';

const logoClassName = 'logo';

const Logo = () => {
  const { isMainPage } = pageCheck();
  const logoElement = (
    <>
      <Icon className={`${logoClassName}__desktop`} code={IconCode.logoDesktop} />
      <Icon className={`${logoClassName}__mobile`} code={IconCode.logoMobile} />
    </>
  );

  return <div className={logoClassName}>{isMainPage ? logoElement : <Link to="/">{logoElement}</Link>}</div>;
};

export { Logo };
