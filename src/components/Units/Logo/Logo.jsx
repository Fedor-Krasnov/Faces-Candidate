import React from 'react';
import './Logo.scss';

const logoClassName = 'logo';

const Logo = () => (
  <div className={logoClassName}>
    <img alt="" className="logo_img logo--desktop" src="/src/assets/media/logo/logo.png" />
    <img alt="" className="logo_img logo--mobile" src="/src/assets/media/logo/logo-mobile.png" />
  </div>
);

export { Logo };
