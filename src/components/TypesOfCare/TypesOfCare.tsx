import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterByCategory } from '../../store/reducers/goodsSlice';
import { getEditedTitle } from '../../utils/getEditedTitle';
import { useResize } from '../../hooks/useResize';

import categories from '../../api/data/categories.json';
import './TypesOfCare.scss';

const TypesOfCare: React.FC = () => {
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  const { filterCategory } = useAppSelector((state) => state.goods);
  const width = useResize();

  const handleChangeActive = (id: number) => {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="types">
      <ul className="types__list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`types__item ${
              active === category.id ? 'types__item--active' : ''
            }`}
            data-index={category.id}
            onClick={() => {
              dispatch(
                filterByCategory(
                  filterCategory === category.title ? '' : category.title
                )
              );
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

export default TypesOfCare;
