import React from 'react';

import './MobileMenu.scss';
import { CustomButton } from '../../UI/CustomButton';
import priceList from '../../../image/icons/price-list.svg';
import address from '../../../image/icons/address.svg';
import call from '../../../image/icons/call.svg';
import mail from '../../../image/icons/mail.svg';

export const MobileMenu: React.FC = () => {
  return (
    <div className="menu">
      <div className="menu__content">
        <ul className="menu__contacts">
          <li className="menu__contact">
            <img src={address} alt="" className="menu__icon" />
            <div className="menu__info">
              <a
                href="https://go.2gis.com/vuzwbp"
                target="_blank"
                className="menu__option"
                rel="noreferrer"
              >
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </a>
              <span className="menu__note">(Рынок Восточный)</span>
            </div>
          </li>
          <li className="menu__contact">
            <img src={mail} alt="" className="menu__icon" />
            <div className="menu__info">
              <a href="mailto:opt.sultan@mail.ru" className="menu__option">
                opt.sultan@mail.ru
              </a>
              <span className="menu__note">На связи в любое время</span>
            </div>
          </li>
          <li className="menu__contact">
            <img src={call} alt="" className="menu__icon" />
            <div className="menu__info">
              <span className="menu__option">Отдел продаж</span>
              <span className="menu__note">+7 (777) 490-00-91</span>
              <span className="menu__note menu__note--time">
                время работы: 9:00-20:00
              </span>
            </div>
          </li>
          <li className="menu__contact">
            <span className="menu__btn-call"></span>
            <span className="menu__order">Заказать звонок</span>
          </li>
        </ul>

        <h3 className="menu__title">Меню сайта:</h3>
        <ul className="menu__mobile-list">
          <li className="menu__list-item">О компании</li>
          <li className="menu__list-item">Доставка и оплата</li>
          <li className="menu__list-item">Возврат</li>
          <li className="menu__list-item">Контакты</li>
        </ul>

        <div className="menu__mobile-button">
          <CustomButton
            title={'Прайс-лист'}
            addedClass={'menu__button-text'}
            imageSrc={priceList}
          />
        </div>
      </div>
    </div>
  );
};
