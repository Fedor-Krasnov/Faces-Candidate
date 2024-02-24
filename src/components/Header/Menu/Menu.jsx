import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

const menuClassName = 'menu';

const Menu = ({ data }) => (
  <nav className={menuClassName}>
    <ul className={`${menuClassName}__list`}>
      {data.map(({ title, link }, indexItem) => (
        <li key={indexItem} className={`${menuClassName}__item`}>
          <Link className={`${menuClassName}__link`} dangerouslySetInnerHTML={{ __html: title }} to={link} />
        </li>
      ))}
      {/*
      <li className="navbar_item navbar_js_link hide">
        <a className="navbar_link" href="">
          Пункт 12
        </a>
      </li>
      <li className="navbar_item navbar_js_toggle navbar_js_link hide">
        <a className="navbar_link carret-up" href="">
          Скрыть
        </a>
      </li>
      */}
    </ul>
  </nav>
);

export { Menu };
