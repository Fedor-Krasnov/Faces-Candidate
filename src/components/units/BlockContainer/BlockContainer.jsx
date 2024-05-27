import React from 'react';
import blockContainerStyles from './BlockContainer.module.scss';

const blockContainerClassName = 'block-container';

const BlockContainer = ({ children }) => (
  <div className={blockContainerStyles[blockContainerClassName]}>{children}</div>
);

export { BlockContainer };
