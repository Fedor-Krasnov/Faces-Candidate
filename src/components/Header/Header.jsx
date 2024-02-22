import React from 'react';
import './Header.scss';
import { headerData } from '../../mocks/components/headerData.js';
import { Logo } from '../Units/Logo';

const Header = () => {
  const {} = headerData;

  return (
    <header className="header container" id="header">
      <Logo />
      <div className="search_box">
        <form action="" className="search_form">
          <input className="search_field" placeholder="Поиск" type="text" />
          <button className="search_btn" type="submit">
            <img alt="найти" className="search_icon" src="/src/assets/media/icons/zoom.png" width="16" />
          </button>
        </form>
      </div>
      <div className="navbar-close" id="navbar-close">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <nav className="navbar navbar_menu">
        <ul className="navbar_list navbar_list--wrap">
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Маркетологи
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Backend-разработчики
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Дизайнеры
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Менеджеры по продажам
            </a>
          </li>
          <li className="navbar_item navbar_js_toggle navbar_js_link" id="p1">
            <a className="navbar_link carret-down" href="">
              Ещё
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 1
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 2
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 3
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 4
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 5
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 6
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 7
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 8
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 9
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 10
            </a>
          </li>
          <li className="navbar_item navbar_js_link hide">
            <a className="navbar_link" href="">
              Пункт 11
            </a>
          </li>
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
        </ul>
      </nav>
      <nav className="navbar navbar_main">
        <ul className="navbar_list">
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Найти кандидата
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Попасть в базу
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              О сервисе
            </a>
          </li>
          <li className="navbar_item">
            <a className="navbar_link" href="">
              Портал
            </a>
          </li>
        </ul>
      </nav>
      <div className="account">
        <button className="btn btn-yellow">Войти</button>
      </div>
    </header>
  );
};

export { Header };
