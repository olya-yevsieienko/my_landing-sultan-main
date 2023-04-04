import React from 'react';
import { Menu } from '../Menu';

import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <div className="navigation__content">
        <div className="navigation__contacts">
          <div className="navigation__block">
            <span className="navigation__img navigation__address"></span>

            <div className="navigation__info">
              <a
                href="https://go.2gis.com/vuzwbp"
                target="_blank"
                className="navigation__option"
                rel="noreferrer"
              >
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </a>
              <span className="navigation__note">(Рынок Восточный)</span>
            </div>
          </div>

          <div className="navigation__block">
            <span className="navigation__img navigation__mail"></span>

            <div className="navigation__info">
              <a
                href="mailto:opt.sultan@mail.ru"
                className="navigation__option"
              >
                opt.sultan@mail.ru
              </a>
              <span className="navigation__note">На связи в любое время</span>
            </div>
          </div>
        </div>

        <div className="navigation__menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};
