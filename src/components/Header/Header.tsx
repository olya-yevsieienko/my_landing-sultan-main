import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import { Navigation } from './Navigation';
import { CustomButton } from '../UI/CustomButton';
import { CustomSearch } from '../UI/CustomSearch/CustomSearch';
import { MobileMenu } from './MobileMenu';

import logo from '../../image/icons/logo.svg';
import catalog from '../../image/icons/catalog-white.svg';
import price from '../../image/icons/price-list.svg';
import consultant from '../../image/consultant.png';
import menuClosed from '../../image/icons/mobile-menu.svg';
import menuOpened from '../../image/icons/menu-opened.svg';
import './Header.scss';
import { getRoundedNum } from '../../utils/getRoundedNum';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalAmount, totalCount } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleRouteChange = (path: string) => {
    const newPath = path;
    navigate(newPath);
  };

  return (
    <header className="header">
      <Navigation />

      <div className="header__content">
        <div className="header__main">
          <div
            className="header__mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={isMenuOpen ? menuOpened : menuClosed} alt="" />
          </div>

          {isMenuOpen && <MobileMenu />}

          <Link to={'/catalog'}>
            <img src={logo} alt="Султан" className="header__logo" />
          </Link>

          <div className="header__catalog">
            <CustomButton
              title={'Каталог'}
              imageSrc={catalog}
              addedClass={'header__catalog--btn-name'}
              onClick={() => handleRouteChange('/catalog')}
            />
          </div>

          <div className="header__search">
            <CustomSearch />
          </div>

          <div className="header__call-order">
            <div className="header__contact">
              <span className="header__number">+7 (777) 490-00-91</span>
              <span className="header__schedule">время работы: 9:00-20:00</span>
              <span className="header__call">Заказать звонок</span>
            </div>
            <img className="header__consultant" src={consultant} alt="" />
          </div>

          <div className="header__price-list">
            <CustomButton
              title={'Прайс-лист'}
              imageSrc={price}
              addedClass={'header__price-list--btn-name'}
            />
          </div>

          <div className="header__basket">
            <Link to="/basket">
              <div className="header__img-basket">
                <span className="header__basket-items">{totalCount}</span>
              </div>
            </Link>
            <div className="header__descrpt">
              <span className="header__basket-name">Корзина</span>
              <span className="header__amount">
                {getRoundedNum(totalAmount)} ₸
              </span>
            </div>
          </div>
        </div>

        <div className="header__mobile-head">
          <Link to="/catalog">
            <div className="header__mobile-btns">
              <div className="header__icon header__icon--catalog"></div>
              <span className="header__btn-name">Каталог</span>
            </div>
          </Link>

          <div className="header__mobile-line"></div>

          <div className="header__mobile-btns">
            <div className="header__icon header__icon--search"></div>
            <span className="header__btn-name">Поиск</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
