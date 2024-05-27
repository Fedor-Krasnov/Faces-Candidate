import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { headerData } from '../../../mocks';
import { Avatar, Button, Icon } from '../../units';
import { IconCode } from '../../units/Icon';
import userPanelStyles from './UserPanel.module.scss';

const userPanelClassName = 'user-panel';

const UserPanel = () => {
  const { linkModalProfile, linkModalExit, popupContent, popupButtonExit, userData } = headerData;
  const { username, subscriptionData: isLogged } = userData;

  return (
    <div
      className={classNames(userPanelStyles[userPanelClassName], {
        [userPanelStyles[`${userPanelClassName}__is-logged`]]: isLogged,
      })}
    >
      {isLogged ? (
        <>
          <div className={userPanelStyles[`${userPanelClassName}__user`]}>
            <Avatar username={username} />
            <span>{username}</span>
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
