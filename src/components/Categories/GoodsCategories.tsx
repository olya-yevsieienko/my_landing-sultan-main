import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { filterByCategory } from '../../store/goodsSlice';
import { getEditedTitle } from '../../utils/getEditedTitle';
import { useResize } from '../../hooks/useResize';

import categories from '../../api/data/categories.json';
import './GoodsCategories.scss';

export const GoodsCategories: React.FC = () => {
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  const width = useResize();

  const handleChangeActive = (id: number) => {
    setActive(id);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`categories__item ${
              active === category.id ? 'categories__item--active' : ''
            }`}
            data-index={category.id}
            onClick={() => {
              dispatch(filterByCategory(category.title));
              handleChangeActive(category.id);
            }}
          >
            {width > 640 ? (
              <>
                {getEditedTitle(category.title)[0]}
                <br />
                {getEditedTitle(category.title)[1]}
              </>
            ) : (
              category.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
