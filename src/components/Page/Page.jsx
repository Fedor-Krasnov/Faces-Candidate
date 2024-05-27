import React from 'react';
import { getRandomInteger } from '../../helpers';
import { userColors } from '../../mocks/initial';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { UseOfCookies } from '../units';

const Page = ({ children }) => (
  <div style={{ '--user-color': userColors[getRandomInteger(0, userColors.length)] }}>
    <Header />
    <main>{children}</main>
    <Footer />
    <UseOfCookies />
  </div>
);

export { Page };
