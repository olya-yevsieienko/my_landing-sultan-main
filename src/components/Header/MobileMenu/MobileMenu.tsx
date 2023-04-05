import React from 'react';

import './MobileMenu.scss';
import { CustomButton } from '../../UI/CustomButton';
import priceList from '../../../image/icons/price-list.svg';
import address from '../../../image/icons/address.svg';
import call from '../../../image/icons/call.svg';
import mail from '../../../image/icons/mail.svg';

export const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <ul className="mobile-menu__contacts">
          <li className="mobile-menu__contact">
            <img src={address} alt="" className="mobile-menu__icon" />
            <div className="mobile-menu__info">
              <a
                href="https://go.2gis.com/vuzwbp"
                target="_blank"
                className="mobile-menu__option"
                rel="noreferrer"
              >
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </a>
              <span className="mobile-menu__note">(Рынок Восточный)</span>
            </div>
          </li>
          <li className="mobile-menu__contact">
            <img src={mail} alt="" className="mobile-menu__icon" />
            <div className="mobile-menu__info">
              <a href="mailto:opt.sultan@mail.ru" className="mobile-menu__option">
                opt.sultan@mail.ru
              </a>
              <span className="mobile-menu__note">На связи в любое время</span>
            </div>
          </li>
          <li className="mobile-menu__contact">
            <img src={call} alt="" className="mobile-menu__icon" />
            <div className="mobile-menu__info">
              <span className="mobile-menu__option">Отдел продаж</span>
              <span className="mobile-menu__note">+7 (777) 490-00-91</span>
              <span className="mobile-menu__note mobile-menu__note--time">
                время работы: 9:00-20:00
              </span>
            </div>
          </li>
          <li className="mobile-menu__contact">
            <span className="mobile-menu__btn-call"></span>
            <span className="mobile-menu__order">Заказать звонок</span>
          </li>
        </ul>

        <h3 className="mobile-menu__title">Меню сайта:</h3>
        <ul className="mobile-menu__mobile-list">
          <li className="mobile-menu__list-item">О компании</li>
          <li className="mobile-menu__list-item">Доставка и оплата</li>
          <li className="mobile-menu__list-item">Возврат</li>
          <li className="mobile-menu__list-item">Контакты</li>
        </ul>

        <div className="mobile-menu__mobile-button">
          <CustomButton
            title={'Прайс-лист'}
            addedClass={'mobile-menu__button-text'}
            imageSrc={priceList}
          />
        </div>
      </div>
    </div>
  );
};
