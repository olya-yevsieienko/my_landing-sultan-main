import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

import { CatalogList } from '../../components/Catalog/CatalogList';
import { CatalogSort } from '../../components/Catalog/CatalogSort';
import { CustomComeBack } from '../../components/UI/CustomComeBack';
import { Good } from '../../types/Good';
import './CatalogPage.scss';
import { Sidebar } from '../../components/Sidebar';
import TypesOfCare from '../../components/TypesOfCare/TypesOfCare';

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
    <section className="catalog" data-testid="catalog-page">
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
        <TypesOfCare />
      </div>

      {isFilterOpen ? (
        <div className="catalog__main">
          <Sidebar />
        </div>
      ) : (
        <div className="catalog__main">
          <Sidebar />
          <div className="catalog__categories--mobile">
            <TypesOfCare />
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
