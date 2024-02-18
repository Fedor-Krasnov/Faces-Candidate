import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export { Page };
