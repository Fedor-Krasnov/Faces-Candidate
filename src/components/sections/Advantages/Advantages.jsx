import React from 'react';
import { Button, Icon, Title } from '../../units';
import advantagesStyles from './Advantages.module.scss';

const advantagesClassName = 'advantages';

const Advantages = ({ content }) => {
  const { titleLeftBlock, titleRightBlock, descriptionRightBlock, buttonTitle, dataPrice, points } = content;

  return (
    <div className={advantagesStyles[advantagesClassName]}>
      <div className={advantagesStyles[`${advantagesClassName}__left-block`]}>
        <Title title={titleLeftBlock} titleLevel="h2" />
        <div className={advantagesStyles[`${advantagesClassName}__points`]}>
          {points.map(({ pointsTitle, pointsDescription, icon }, pointsIndex) => (
            <div key={pointsIndex}>
              <div className={advantagesStyles[`${advantagesClassName}__point`]}>
                <Icon code={icon} />
                <Title title={pointsTitle} titleLevel="h3" />
              </div>
              <p
                className={advantagesStyles[`${advantagesClassName}__points-description`]}
                dangerouslySetInnerHTML={{ __html: pointsDescription }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={advantagesStyles[`${advantagesClassName}__right-block`]} data-price={dataPrice}>
        <Title
          className={advantagesStyles[`${advantagesClassName}__title`]}
          description={descriptionRightBlock}
          title={titleRightBlock}
          titleLevel="h2"
        />
        <Button className={advantagesStyles[`${advantagesClassName}__button`]} secondary title={buttonTitle} />
      </div>
    </div>
  );
};

export { Advantages };
