import React from 'react';
import './DirectionOfWork.scss';
import { Link } from 'react-router-dom';
import { directionOfWorkData } from '../../../mocks/sections/directionOfWorkData';
import { Icon, Title } from '../../units';
import { IconCode } from '../../units/Icon';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = () => {
  const { title, options } = directionOfWorkData;

  return (
    <section className={directionOfWorkClassName}>
      <Title title={title} titleLevel="h2" />
      <div className={`${directionOfWorkClassName}__container`}>
        {options.map(({ image, optionsTitle }, optionIndex) => (
          <Link key={optionIndex} className={`${directionOfWorkClassName}__options`} to="tmp">
            <div className={`${directionOfWorkClassName}__img-container`}>
              <Icon code={IconCode.target} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: optionsTitle }} />
          </Link>
        ))}
        {/* <a className="job" href="">
          <span className=" job_img_box">
            <img alt="" className="job_img" src=" tmp" />
          </span>
          <span className="job_counter">80+</span>
          <span className="job_title">Разработка</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Аналитика</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Комьюнити</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Дизайн</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Продажи</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Контент</span>
        </a>
        <a href="" className="job">
              <span className="job_img_box">
                  <img src="tmp" alt="" className="job_img">
              </span>
          <span className="job_title">Топ-менеджмент</span>
        </a> */}
      </div>
    </section>
  );
};

export { DirectionOfWork };
