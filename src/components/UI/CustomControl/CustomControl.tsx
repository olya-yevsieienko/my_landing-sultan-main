import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { incrementQuantity, decrementQuantity } from '../../../store/cartSlice';
import { Good } from '../../../types/Good';

import './CustomControl.scss';

type Props = {
  good: Good;
};

export const CustomControl: React.FC<Props> = ({ good }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="control">
      <span
        className="control__decrease"
        onClick={() => dispatch(decrementQuantity(good))}
      >
        -
      </span>

      <span className="control__count">{good.amount}</span>

      <span
        className="control__increase"
        onClick={() => dispatch(incrementQuantity(good))}
      >
        +
      </span>
    </div>
  );
};
