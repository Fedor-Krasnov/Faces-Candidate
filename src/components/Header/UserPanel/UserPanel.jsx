import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getRandomInteger } from '../../../helpers';
import { headerData } from '../../../mocks';
import { userColors } from '../../../mocks/initial';
import { Button, Icon } from '../../units';
import { IconCode } from '../../units/Icon';
import userPanelStyles from './UserPanel.module.scss';

const userPanelClassName = 'user-panel';
const user = 'Fedor Krasnov';

const UserPanel = ({ isLogged }) => {
  const { linkModalProfile, linkModalExit, popupContent, popupButtonExit } = headerData;
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
          <div
            className={userPanelStyles[`${userPanelClassName}__user`]}
            style={{ '--user-color': userColors[getRandomInteger(0, userColors.length)] }}
          >
            <span>{getAbbrUser(user)}</span>
            <span>{user}</span>
          </div>
          <nav className={userPanelStyles[`${userPanelClassName}__popup`]}>
            <ul>
              <li className={userPanelStyles[`${userPanelClassName}__popup-content`]}>
                {popupContent.map(({ popupIcon, popupButton }, popupIndex) => (
                  <Link key={popupIndex} to={linkModalProfile}>
                    <p
                      className={userPanelStyles[`${userPanelClassName}__popup-button-profile`]}
                      dangerouslySetInnerHTML={{ __html: popupButton }}
                    />
                    <Icon code={popupIcon} />
                  </Link>
                ))}
              </li>
              <li>
                <Link to={linkModalExit}>
                  <p
                    className={userPanelStyles[`${userPanelClassName}__popup-button-exit`]}
                    dangerouslySetInnerHTML={{ __html: popupButtonExit }}
                  />
                  <Icon className={userPanelStyles[`${userPanelClassName}__icon-exit`]} code={IconCode.exit} />
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <Button title="Войти" />
      )}
    </div>
  );
};

export { UserPanel };
