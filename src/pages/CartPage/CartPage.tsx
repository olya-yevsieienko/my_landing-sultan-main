import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useModal } from '../../hooks/useModal';

import { CartList } from '../../components/CartList';
import { CustomButton } from '../../components/UI/CustomButton';
import { CustomComeBack } from '../../components/UI/CustomComeBack';
import { Modal } from '../../components/Modal';
import './CartPage.scss';

export const BasketPage = () => {
  const { isOpen, handleToggle } = useModal();
  const { totalAmount, goods } = useAppSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__back">
        <CustomComeBack path="./catalog" />
      </div>

      <ul className="cart__nav">
        <li className="cart__nav-link">Главная</li>
        <span className="cart__nav-line"></span>
        <li className="cart__nav-link cart__nav-link--active">Корзина</li>
      </ul>

      <h2 className="cart__title">Корзина</h2>
      <div className="cart__list">
        {!goods.length ? (
          <p className="cart__empty">В корзине пока ничего нет</p>
        ) : (
          <CartList />
        )}
      </div>

      <div className="cart__footer">
        <span className="cart__amount--mobile">{totalAmount} ₸</span>
        <div className="cart__order">
          <CustomButton
            title={'Оформить заказ'}
            addedClass={''}
            imageSrc={''}
            onClick={handleToggle}
            disabled={goods.length ? false : true}
          />
        </div>
        <span className="cart__amount">{totalAmount} ₸</span>
      </div>

      {goods.length ? (
        <Modal isOpen={isOpen} handleToggle={handleToggle} />
      ) : (
        ''
      )}
    </div>
  );
};
