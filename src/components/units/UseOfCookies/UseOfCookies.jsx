import React from 'react';
import { useOfCookies } from '../../../hooks';
import { Button } from '../Button';
import useOfCookiesStyles from './UseOfCookies.module.scss';

const useOfCookiesClassName = 'use-of-cookies';

const UseOfCookies = () => {
  const { closePopupCookie, isPopupCookieShowing } = useOfCookies();
  if (!isPopupCookieShowing) {
    return null;
  }

  return (
    <div className={useOfCookiesStyles[useOfCookiesClassName]}>
      <div>Продолжая пользоваться сайтом, вы&nbsp;соглашаетесь с&nbsp;использованием файлов cookie</div>
      <Button onClick={() => closePopupCookie()} secondary title="Хорошо" />
    </div>
  );
};

export { UseOfCookies };
