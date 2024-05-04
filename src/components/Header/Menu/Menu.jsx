import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '../../units';
import { IconCode } from '../../units/Icon';
import menuStyles from './Menu.module.scss';

const menuClassName = 'menu';

const Menu = ({ data, isModal }) => {
  const ulRef = useRef(null);
  const isOpenRef = useRef(false);
  const maxViewItems = 4;
  const dataLength = data.length;
  const isMoreElements = dataLength > maxViewItems;

  const getItem = ({ title, link }, indexItem, className) => (
    <li key={indexItem} className={classNames(menuStyles[`${menuClassName}__item`], className)}>
      <Link className={menuStyles[`${menuClassName}__link`]} dangerouslySetInnerHTML={{ __html: title }} to={link} />
    </li>
  );

  const handleClick = () => {
    if (!isOpenRef.current) {
      ulRef.current.classList.add(menuStyles[`${menuClassName}__list-more-open`]);
      ulRef.current.classList.remove(menuStyles[`${menuClassName}__list-more-close`]);
    } else {
      ulRef.current.classList.add(menuStyles[`${menuClassName}__list-more-close`]);
      ulRef.current.classList.remove(menuStyles[`${menuClassName}__list-more-open`]);
    }
    isOpenRef.current = !isOpenRef.current;
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <nav className={classNames(menuStyles[menuClassName], { [menuStyles[`${menuClassName}_is-modal`]]: isModal })}>
      <ul ref={ulRef} className={menuStyles[`${menuClassName}__list`]}>
        {data.slice(0, 4).map((item, indexItem) => getItem(item, indexItem, null))}
        {data.slice(4).map((item, indexItem) => getItem(item, indexItem, menuStyles[`${menuClassName}__item-hidden`]))}
        {isMoreElements && (
          <li className={menuStyles[`${menuClassName}__more`]} onClick={handleClick}>
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
