import React, { useEffect, useRef } from 'react';
import './Menu.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '../../units';
import { IconCode } from '../../units/Icon';

const menuClassName = 'menu';

const Menu = ({ data }) => {
  const ulRef = useRef(null);
  const isOpenRef = useRef(false);
  const maxViewItems = 4;
  const dataLength = data.length;
  const isMoreElements = dataLength > maxViewItems;

  const getItem = ({ title, link }, indexItem, className) => (
    <li key={indexItem} className={classNames(`${menuClassName}__item`, className)}>
      <Link className={`${menuClassName}__link`} dangerouslySetInnerHTML={{ __html: title }} to={link} />
    </li>
  );

  const handleClick = () => {
    if (isOpenRef.current) {
      ulRef.current.classList.add(`${menuClassName}__list-more-open`);
      ulRef.current.classList.remove(`${menuClassName}__list-more-close`);
    } else {
      ulRef.current.classList.add(`${menuClassName}__list-more-close`);
      ulRef.current.classList.remove(`${menuClassName}__list-more-open`);
    }
    isOpenRef.current = !isOpenRef.current;
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <nav className={menuClassName}>
      <ul ref={ulRef} className={`${menuClassName}__list`}>
        {data.slice(0, 4).map((item, indexItem) => getItem(item, indexItem, null))}
        {data.slice(4).map((item, indexItem) => getItem(item, indexItem, `${menuClassName}__item-hidden`))}
        {isMoreElements && (
          <li className={`${menuClassName}__more`} onClick={handleClick}>
            <div>
              <span>Ещё</span>
              <span>Скрыть</span>
            </div>
            <Icon code={IconCode.chevron} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Menu };
