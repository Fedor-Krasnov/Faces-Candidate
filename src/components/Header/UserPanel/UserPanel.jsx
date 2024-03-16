import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { headerData } from '../../../mocks';
import { Button, Icon } from '../../units';
import { IconCode } from '../../units/Icon';
import userPanelStyles from './UserPanel.module.scss';

const userPanelClassName = 'user-panel';
const user = 'Fedor Krasnov';

const UserPanel = ({ isLogged }) => {
  const { linkModalProfile, linkModalExit } = headerData;
  const getAbbrUser = (user) => {
    const userArray = user.split(' ');

    return userArray.length > 1 ? `${userArray[0].slice(0, 1)}${userArray[1].slice(0, 1)}` : user.slice(0, 1);
  };

  return (
    <div
      className={classNames(userPanelStyles[userPanelClassName], {
        [userPanelStyles[`${userPanelClassName}__is-logged`]]: isLogged,
      })}
    >
      {isLogged ? (
        <>
          <div className={userPanelStyles[`${userPanelClassName}__user`]}>
            <span>{getAbbrUser(user)}</span>
            <span>{user}</span>
          </div>
          <div className={userPanelStyles[`${userPanelClassName}__popup`]}>
            <Link className={userPanelStyles[`${userPanelClassName}__popup-content`]} to={linkModalProfile}>
              <p>Посмотреть профиль</p>
              <Icon code={IconCode.user} />
            </Link>
            <Link className={userPanelStyles[`${userPanelClassName}__popup-content`]} to={linkModalExit}>
              <span>Выйти</span>
              <Icon className={userPanelStyles[`${userPanelClassName}__icon-exit`]} code={IconCode.exit} />
            </Link>
          </div>
        </>
      ) : (
        <Button title="Войти" to="/user-profile" />
      )}
    </div>
  );
};

export { UserPanel };
