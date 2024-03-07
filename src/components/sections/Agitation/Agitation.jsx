import React from 'react';
import './Agitation.scss';
import { agitationData } from '../../../mocks/sections/agitationData';
import { Button } from '../../units';

const agitationClassName = 'agitation';

const Agitation = () => {
  const { image, buttonTitle, buttonTitleOutline } = agitationData;

  return (
    <section className={agitationClassName}>
      <div className={`${agitationClassName}__img-container`}>
        <img alt={image.alt} className={`${agitationClassName}__image`} src={image.src} />
      </div>
      <div className={`${agitationClassName}__content`}>
        <div className={`${agitationClassName}__title-container`}>
          <h1 className={`${agitationClassName}__title`}>
            <p>Нанимайте проверенных</p>
            <span className={`${agitationClassName}__dedicated`}>кандидатов</span>
          </h1>
          <p className={`${agitationClassName}__description`}>
            Мы уже со всеми провели собеседования и подтверждаем их профессионализм
          </p>
        </div>
        <div className={`${agitationClassName}__button-container`}>
          <Button title={buttonTitle} />
          <Button outline title={buttonTitleOutline} />
        </div>
      </div>
    </section>
  );
};

export { Agitation };
