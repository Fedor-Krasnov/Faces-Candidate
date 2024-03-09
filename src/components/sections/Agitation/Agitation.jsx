import React from 'react';
import './Agitation.scss';
import { agitationData } from '../../../mocks/sections/agitationData';
import { Button, Title } from '../../units';

const agitationClassName = 'agitation';

const Agitation = () => {
  const { image, buttonTitle, buttonTitleOutline, description, title } = agitationData;

  return (
    <section className={agitationClassName}>
      <div className={`${agitationClassName}__content`}>
        <Title description={description} title={title} titleLevel="h1" />
        <div className={`${agitationClassName}__button-container`}>
          <Button title={buttonTitle} />
          <Button outline title={buttonTitleOutline} />
        </div>
      </div>
      <div className={`${agitationClassName}__image`}>
        <img alt={image.alt} src={image.src} />
      </div>
    </section>
  );
};

export { Agitation };
