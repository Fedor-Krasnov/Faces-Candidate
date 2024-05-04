import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import mouseMoveContainerStyles from './MouseMoveContainer.module.scss';

const mouseMoveContainerClassName = 'mouse-move-container';

const MouseMoveContainer = ({ children }) => {
  const mouseMoveContentRef = useRef(null);
  const { current: mouseMoveContentElement } = mouseMoveContentRef;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  const onMouseDown = () => {
    setIsMouseDown(true);
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
  };

  const onMouseMove = (event) => {
    if (!isMouseDown) {
      return;
    }

    mouseMoveContentElement.scrollLeft -= event.movementX;
    if (!isMouseMoving) {
      setIsMouseMoving(true);
    }
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className={mouseMoveContainerStyles[mouseMoveContainerClassName]}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        ref={mouseMoveContentRef}
        className={classNames(mouseMoveContainerStyles[`${mouseMoveContainerClassName}__content`], {
          [mouseMoveContainerStyles[`${mouseMoveContainerClassName}__content-moving`]]: isMouseMoving,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export { MouseMoveContainer };
