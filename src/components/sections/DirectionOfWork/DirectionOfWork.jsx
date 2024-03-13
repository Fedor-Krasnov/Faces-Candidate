import React from 'react';
import './DirectionOfWork.scss';
import { directionOfWorkData } from '../../../mocks/sections/directionOfWorkData';
import { Title } from '../../units';

const directionOfWorkClassName = 'direction-of-work';

const DirectionOfWork = () => {
  const { title } = directionOfWorkData;

  return (
    <section className={directionOfWorkClassName}>
      <Title title={title} titleLevel="h2" />
      <div className={`${directionOfWorkClassName}__container`}>
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp"" alt="" class=" job_img"> */}
        {/*       </span> */}
        {/*       <span class=" job_counter">40+</span> */}
        {/*       <span class=" job_title">Маркетинг</span> */}
        {/*     </a> */}
        {/*     <a href="" class=" job"> */}
        {/*       <span class=" job_img_box"> */}
        {/*           <img src=" tmp"" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_counter">80+</span> */}
        {/*   <span className="job_title">Разработка</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Аналитика</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Комьюнити</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Дизайн</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Продажи</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Контент</span> */}
        {/* </a> */}
        {/* <a href="" className="job"> */}
        {/*       <span className="job_img_box"> */}
        {/*           <img src="tmp" alt="" className="job_img"> */}
        {/*       </span> */}
        {/*   <span className="job_title">Топ-менеджмент</span> */}
        {/* </a> */}
      </div>
    </section>
  );
};

export { DirectionOfWork };
