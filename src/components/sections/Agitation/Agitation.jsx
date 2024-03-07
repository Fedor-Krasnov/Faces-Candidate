import React from 'react';
import './Agitation.scss';

const agitationClassName = 'agitation';

const Agitation = () => (
  <section className="intro container">
    <div className="intro_img_box">
      <img alt="иконка монитор с кандидатами" className="intro_img" src="tmp" />
    </div>
    <div className="intro_content_box">
      <h1 className="title">
        Нанимайте проверенных <span className="badge">кандидатов</span>
      </h1>
      <p className="subtitle text-gray">Мы уже со всеми провели собеседования и подтверждаем их профессионализм</p>
      <div className="btn_group">
        <a className="btn btn-lg btn-yellow" href="">
          Выбрать кандидата
        </a>
        <a className="btn btn-lg btn-outline-yellow" href="">
          Попасть в базу
        </a>
      </div>
    </div>
  </section>
);

export { Agitation };
