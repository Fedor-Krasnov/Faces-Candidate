import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useOfCookies } from '../../../hooks';
import { Button } from '../Button';
import useOfCookiesStyles from './UseOfCookies.module.scss';

const useOfCookiesClassName = 'use-of-cookies';

const UseOfCookies = () => {
  const { closePopupCookie, isPopupCookieShowing } = useOfCookies();

  return (
    <CSSTransition
      classNames={{ exit: useOfCookiesStyles[`${useOfCookiesClassName}_exit`] }}
      in={isPopupCookieShowing}
      timeout={700}
      unmountOnExit
    >
      <div className={useOfCookiesStyles[useOfCookiesClassName]}>
        <div>
          Продолжая пользоваться данным сайтом, вы&nbsp;соглашаетесь с&nbsp;тем, что мы&nbsp;используем файлы cookie
        </div>
        <Button onClick={() => closePopupCookie()} secondary title="Хорошо" />
      </div>
    </CSSTransition>
  );
};

export { UseOfCookies };
