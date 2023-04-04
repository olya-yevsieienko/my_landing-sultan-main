import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

import { CatalogList } from '../../components/Catalog/CatalogList';
import { CatalogSort } from '../../components/Catalog/CatalogSort';
import { SidebarFilter } from '../../components/SidebarFilter';
import { CustomComeBack } from '../../components/UI/CustomComeBack';
import { GoodsCategories } from '../../components/Categories';
import { Good } from '../../types/Good';
import './CatalogPage.scss';

export const CatalogPage = () => {
  const { goods, updatedGoods, filterParams } = useAppSelector(
    (state) => state.goods
  );
  const { isFilterOpen } = useAppSelector((state) => state.filter);
  const [visibleGoods, setVisibleGoods] = useState<Good[]>(goods);

  useEffect(() => {
    setVisibleGoods(updatedGoods);
  }, [goods, updatedGoods, filterParams]);

  return (
    <section className="catalog">
      <div className="catalog__back">
        <CustomComeBack path="" />
      </div>

      <ul className="catalog__nav">
        <li className="catalog__nav-link">Главная</li>
        <span className="catalog__nav-line"></span>
        <li className="catalog__nav-link catalog__nav-link--active">
          Косметика и гигиена
        </li>
      </ul>

      <div className="catalog__header">
        <h2 className="catalog__title">Косметика и гигиена</h2>

        <div className="catalog__sort">
          <CatalogSort />
        </div>
      </div>

      <div className="catalog__categories">
        <GoodsCategories />
      </div>

      {isFilterOpen ? (
        <div className="catalog__main">
          <SidebarFilter />
        </div>
      ) : (
        <div className="catalog__main">
          <SidebarFilter />
          <div className="catalog__categories--mobile">
            <GoodsCategories />
          </div>
          <div className="catalog__mobile-sort">
            <CatalogSort />
          </div>
          {!visibleGoods.length ? (
            <p className="catalog__list-empty">Ничего не найдено</p>
          ) : (
            <CatalogList goods={visibleGoods} />
          )}
        </div>
      )}
    </section>
  );
};
