import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useResize } from '../../hooks/useResize';
import { setFilterStatus } from '../../store/filterSlice';
import { filterByCategory } from '../../store/goodsSlice';

import { SidebarForm } from './Filter/Filter';
import { CustomOpenButton } from '../UI/CustomOpenButton';
import categories from '../../api/data/categories.json';
import './SidebarFilter.scss';

export const SidebarFilter: React.FC = () => {
  const width = useResize();
  const { isFilterOpen } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleOpenFilter = () => {
    if (width <= 640) {
      dispatch(setFilterStatus(!isFilterOpen));
    }
  };

  return (
    <div className="side-filter">
      <div className="side-filter__header">
        <h4 className="side-filter__title">ПОДБОР ПО ПАРАМЕТРАМ</h4>
        <div className="side-filter__open" onClick={handleOpenFilter}>
          <CustomOpenButton />
        </div>
      </div>
      {width > 640 && <SidebarForm />}
      {isFilterOpen && <SidebarForm />}
      <div className="side-filter__categories">
        {categories.map((category) => (
          <h6
            className="side-filter__subtitle side-filter__category"
            key={category.id}
            onClick={() => dispatch(filterByCategory(category.title))}
          >
            {category.title}
          </h6>
        ))}
      </div>
    </div>
  );
};
