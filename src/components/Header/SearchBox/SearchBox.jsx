import React from 'react';
import './SearchBox.scss';
import { Input } from '../../units';
import { IconCode } from '../../units/Icon';

const searchBoxClassName = 'search-box';

const SearchBox = () => (
  <div className={searchBoxClassName}>
    <form action="">
      <Input buttonIcon={IconCode.zoom} placeholder="Поиск" />
    </form>
  </div>
);

export { SearchBox };
