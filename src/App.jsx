import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Page } from './components/Page';
import { HomePage } from './components/Page/HomePage';
import { UserProfilePage } from './components/Page/UserProfilePage';

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Page>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<UserProfilePage />} path="/user-profile" />
      </Routes>
    </Page>
  );
};

export { App };
