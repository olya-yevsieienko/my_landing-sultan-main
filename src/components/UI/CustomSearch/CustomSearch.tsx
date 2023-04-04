import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import './CustomSearch.scss';

type Props = {};

export const CustomSearch: React.FC<Props> = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Поиск..." />
      <div className="search__magnifier"></div>
    </div>
  );
};
