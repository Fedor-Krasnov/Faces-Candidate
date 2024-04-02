import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { UseOfCookies } from '../units';

const Page = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <UseOfCookies />
  </>
);

export { Page };
