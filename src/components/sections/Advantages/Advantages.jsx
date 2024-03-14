import React from 'react';
import './Advantages.scss';
import { advantagesData } from '../../../mocks/sections/advantagesData';

const advantagesClassName = 'advantages';

const Advantages = () => {
  const {} = advantagesData;

  return (
    <section className="cta_box">
      <div className="cta_features_box">
        <div className="cta_box__title">
          <h2>Почему работодатели выбирают ЛИЦА?</h2>
        </div>
        <dl className="features">
          <dt className="features_title">Проверка компетенций</dt>
          <dd className="features_description">
            Всех кандидатов с&nbsp;нашей стороны собеседуют не&nbsp;рекрутера, а&nbsp;эксперты в&nbsp;своих областях.
            По&nbsp;результаты мы&nbsp;составляем справку о&nbsp;кандидате, чтобы вы&nbsp;могли узнать его лучше.
          </dd>
          <dt className="features_title">Сотни кандидатов по подписке</dt>
          <dd className="features_description">
            Вы&nbsp;сможете самостоятельно связываться с&nbsp;кандидатами&nbsp;&mdash; все они дали согласие
            на&nbsp;это.
          </dd>
          <dt className="features_title">Еженедельное обновление базы</dt>
          <dd className="features_description">
            В&nbsp;рамках сервиса ЛИЦА.Работа мы&nbsp;проводим по&nbsp;несколько десятков собеседований еженедельно,
            и&nbsp;пополняем базу новыми справками по&nbsp;лучшим кандидатам.
          </dd>
        </dl>
      </div>
      <div className="cta_price_box" data-price="4 900">
        <div className="cta_box__title-2">
          <h2>Кандидаты по подписке 4900₽ в месяц</h2>
        </div>
        <p className="text-red">В 10-100 раз ниже стоимости любого подбора</p>
        <div className="btn-white__container">
          <a className="btn btn-log btn-white" href="">
            Выбрать кандидата
          </a>
        </div>
      </div>
    </section>
  );
};

export { Advantages };
