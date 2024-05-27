import React from 'react';
import avatarStyles from './Avatar.module.scss';

const avatarClassName = 'avatar';

const Avatar = ({ username }) => {
  const getAbbrUser = (user) => {
    const userArray = user.split(' ');

    return userArray.length > 1 ? `${userArray[0].slice(0, 1)}${userArray[1].slice(0, 1)}` : user.slice(0, 1);
  };

  return <div className={avatarStyles[avatarClassName]}>{getAbbrUser(username)}</div>;
};

export { Avatar };
