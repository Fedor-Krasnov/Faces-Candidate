import React from 'react';
import { agitationData } from '../../../mocks/sections';
import { Button, Title } from '../../units';
import agitationStyles from './Agitation.module.scss';

const agitationClassName = 'agitation';

const Agitation = () => {
  const { image, buttonTitle, buttonTitleOutline, description, title } = agitationData;

  return (
    <section className={agitationStyles[agitationClassName]}>
      <div className={agitationStyles[`${agitationClassName}__content`]}>
        <Title description={description} title={title} titleLevel="h1" />
        <div className={agitationStyles[`${agitationClassName}__button-container`]}>
          <Button title={buttonTitle} />
          <Button outline title={buttonTitleOutline} />
        </div>
      </div>
      <div className={agitationStyles[`${agitationClassName}__image`]}>
        <img alt={image.alt} src={image.src} />
      </div>
    </section>
  );
};

export { Agitation };
