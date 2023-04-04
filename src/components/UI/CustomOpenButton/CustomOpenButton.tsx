import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

import './CustomOpenButton.scss';
import down from '../../../image/icons/arrow-down.svg';
import up from '../../../image/icons/arrow-up.svg';

export const CustomOpenButton: React.FC = () => {
  const { isFilterOpen } = useAppSelector((state) => state.filter);

  return (
    <div className="open-button">
      {isFilterOpen ? <img src={up} alt="" /> : <img src={down} alt="" />}
    </div>
  );
};
