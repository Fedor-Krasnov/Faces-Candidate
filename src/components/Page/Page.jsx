import React from 'react';
import { Footer } from '../Footer/index.js';
import { Header } from '../Header/index.js';

const Page = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export { Page };
