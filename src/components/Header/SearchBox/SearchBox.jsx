import React from 'react';
import { Input } from '../../units';
import { IconCode } from '../../units/Icon';
import searchBoxStyles from './SearchBox.module.scss';

const searchBoxClassName = 'search-box';

const SearchBox = () => (
  <div className={searchBoxStyles[searchBoxClassName]}>
    <form action="">
      <Input
        buttonIcon={IconCode.zoom}
        className={searchBoxStyles[`${searchBoxClassName}__input`]}
        placeholder="Поиск"
      />
    </form>
  </div>
);

export { SearchBox };
