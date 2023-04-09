import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { Good } from '../../../types/Good';
import { removeGood } from '../../../store/reducers/cartSlice';
import { CustomControl } from '../../UI/CustomControl';
import './CartControl.scss';

type Props = {
  good: Good;
};

export const CartControl: React.FC<Props> = ({ good }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="control">
      <div className="control__control">
        <CustomControl good={good} />
      </div>

      <div className="control__amount">
        <span className="control__price">{good.price} ₸</span>
      </div>
      <div
        className="control__remove"
        onClick={() => dispatch(removeGood(good))}
      ></div>
    </div>
  );
};
