import { useEffect, useState } from 'react';

const useOfCookies = () => {
  const cookieAgreementAccepted = 'cookie-agreement-accepted-faces-candidate';
  const [isPopupCookieShowing, setIsPopupCookieShowing] = useState(false);

  const getPopupCookie = () => {
    const isCookie = document.cookie.match('\\b' + cookieAgreementAccepted + '=([^;]*)\\b');

    if (!isCookie) {
      setIsPopupCookieShowing(true);
    }
  };

  const expiresDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10);

    return date.toUTCString();
  };

  const closePopupCookie = () => {
    document.cookie = `${cookieAgreementAccepted}=true;expires=${expiresDate()};path=/`;
    setIsPopupCookieShowing(false);
  };

  useEffect(() => getPopupCookie());

  return {
    closePopupCookie,
    isPopupCookieShowing,
  };
};

export { useOfCookies };
