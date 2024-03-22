import React from 'react';
import './Advantages.scss';
import { advantagesData } from '../../../mocks/sections';
import { Button, Icon, Title } from '../../units';

const advantagesClassName = 'advantages';

const Advantages = () => {
  const { titleLeftBlock, titleRightBlock, descriptionRightBlock, buttonTitle, dataPrice, points } = advantagesData;

  return (
    <section className={advantagesClassName}>
      <div className={`${advantagesClassName}__left-block`}>
        <Title title={titleLeftBlock} titleLevel="h2" />
        <div className={`${advantagesClassName}__points`}>
          {points.map(({ pointsTitle, pointsDescription, icon }, pointsIndex) => (
            <div key={pointsIndex}>
              <div className={`${advantagesClassName}__point`}>
                <Icon code={icon} />
                <Title title={pointsTitle} titleLevel="h3" />
              </div>
              <p
                className={`${advantagesClassName}__points-description`}
                dangerouslySetInnerHTML={{ __html: pointsDescription }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${advantagesClassName}__right-block`} data-price={dataPrice}>
        <Title
          className={`${advantagesClassName}__title`}
          description={descriptionRightBlock}
          title={titleRightBlock}
          titleLevel="h2"
        />
        <Button className={`${advantagesClassName}__button`} secondary title={buttonTitle} />
      </div>
    </section>
  );
};

export { Advantages };
