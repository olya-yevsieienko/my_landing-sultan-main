import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import {
  sortByName,
  sortByPriceASC,
  sortByPriceDESC,
} from '../../../store/goodsSlice';

import './CatalogSort.scss';

export const CatalogSort: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenSorting = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="sort">
      <h6 className="sort__title">Сортировка:</h6>
      <span className="sort__select" onClick={handleOpenSorting}>
        Название
        <span className="sort__select-arrow"></span>
      </span>
      {isOpened && (
        <ul className="sort__list" onClick={handleOpenSorting}>
          <li className="sort__type" onClick={() => dispatch(sortByName('1'))}>
            По названию (А - Я)
          </li>
          <li className="sort__type" onClick={() => dispatch(sortByName('-1'))}>
            По названию (Я - А)
          </li>
          <li className="sort__type" onClick={() => dispatch(sortByPriceASC())}>
            По возрастанию цены
          </li>
          <li
            className="sort__type"
            onClick={() => dispatch(sortByPriceDESC())}
          >
            По убыванию цены
          </li>
        </ul>
      )}
    </div>
  );
};
