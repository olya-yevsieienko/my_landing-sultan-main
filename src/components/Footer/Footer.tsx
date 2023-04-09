import React from 'react';
import { CustomButton } from '../UI/CustomButton';

import './Footer.scss';
import logo from '../../image/icons/logo-white.svg';
import download from '../../image/icons/price-list.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__block footer__first-block">
          <div className="footer__header">
            <img src={logo} alt="Логотип" className="footer__logo" />

            <div className="footer__custom-btn-wrap">
              <CustomButton
                title={'Прайс-лист'}
                addedClass={'footer__price-list-title'}
                imageSrc={download}
              />
            </div>
          </div>

          <p className="footer__text">
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            Кокчетаве и Акмолинской области
          </p>

          <span className="footer__text footer__subscribe">
            Подпишись на скидки и акции
          </span>
          <div className="footer__email">
            <input
              type="email"
              className="footer__input"
              placeholder="Введите ваш E-mail"
            />
            <span className="footer__email-btn"></span>
          </div>
        </div>

        <div className="footer__main">
          <div className="footer__block">
            <h6 className="footer__subtitle">Меню сайта:</h6>
            <ul className="footer__list">
              <li className="footer__list-item">О компании</li>
              <li className="footer__list-item">Доставка и оплата</li>
              <li className="footer__list-item">Возврат</li>
              <li className="footer__list-item">Контакты</li>
            </ul>
          </div>

          <div className="footer__block">
            <h6 className="footer__subtitle">Категории:</h6>
            <ul className="footer__list">
              <li className="footer__list-item">Бытовая химия</li>
              <li className="footer__list-item">Косметика и гигиена</li>
              <li className="footer__list-item">Товары для дома</li>
              <li className="footer__list-item">Товары для детей и мам</li>
              <li className="footer__list-item">Посуда</li>
            </ul>
          </div>

          <div className="footer__block-desktop">
            <h6 className="footer__subtitle">Скачать прайс-лист:</h6>

            <div className="footer__price-wrap-desktop">
              <CustomButton
                title={'Прайс-лист'}
                addedClass={'footer__price-list-title'}
                imageSrc={download}
              />
            </div>

            <span className="footer__messenger-title">
              Связь в мессенджерах:
            </span>
            <span className="footer__link">
              <span className="footer__whatsapp"></span>
              <span className="footer__telegram"></span>
            </span>
          </div>

          <div className="footer__block">
            <h6 className="footer__subtitle">Контакты:</h6>
            <ul className="footer__list">
              <li className="footer__list-item">
                <span className="footer__contact">+7 (777) 490-00-91</span>
                <span className="footer__descrptn">
                  время работы: 9:00-20:00
                </span>
                <span className="footer__call">Заказать звонок</span>
              </li>
              <li className="footer__list-item">
                <span className="footer__contact">opt.sultan@mail.ru</span>
                <span className="footer__descrptn">На связи в любое время</span>
              </li>
            </ul>

            <span className="footer__link">
              <span className="footer__visa"></span>
              <span className="footer__mastercard"></span>
            </span>
          </div>

          <div className="footer__block footer__messenger">
            <span className="footer__messenger-title">
              Связь <br /> в мессенджерах:
            </span>
            <span className="footer__link">
              <span className="footer__whatsapp"></span>
              <span className="footer__telegram"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
