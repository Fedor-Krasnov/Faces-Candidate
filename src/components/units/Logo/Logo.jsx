import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { pageCheck } from '../../../helpers';
import { Icon, IconCode } from '../Icon';
import logoStyles from './Logo.module.scss';

const logoClassName = 'logo';

const Logo = ({ className }) => {
  const { isMainPage } = pageCheck();
  const logoElement = (
    <>
      <Icon className={logoStyles[`${logoClassName}__desktop`]} code={IconCode.logoDesktop} />
      <Icon className={logoStyles[`${logoClassName}__mobile`]} code={IconCode.logoMobile} />
    </>
  );

  return (
    <div className={classNames(logoStyles[logoClassName], className)}>
      {isMainPage ? logoElement : <Link to="/">{logoElement}</Link>}
    </div>
  );
};

export { Logo };
