import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { CartControl } from './CartControl';
import { CartGood } from './CartGood/CartGood';
import './CartList.scss';

export const CartList: React.FC = () => {
  const { goods } = useAppSelector((state) => state.cart);

  return (
    <div className="cart-list">
      {goods.map((good) => (
        <div key={good.id} className="cart-list__item">
          <CartGood good={good} />
          <CartControl good={good} />
        </div>
      ))}
    </div>
  );
};
