import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { setFilterStatus } from '../../../store/reducers/filterSlice';
import { filterByParams } from '../../../store/reducers/goodsSlice';
import { getCountBrands, getListOfBrands } from '../../../utils/brands';
import {
  getCountManufacturer,
  getListOfMakers,
} from '../../../utils/manufacturer';

import './Filter.scss';
import { CustomSearch } from '../../UI/CustomSearch/CustomSearch';
import { CustomButton } from '../../UI/CustomButton';

type Params = {
  priceFrom: number;
  priceTo: number;
  makers: string[];
  brands: string[];
};

export const SidebarForm: React.FC = () => {
  const totalManufacturers = getCountManufacturer();
  const shownMakers = totalManufacturers.slice(0, 4);
  const totalBrands = getCountBrands();
  const shownBrands = totalBrands.slice(0, 4);
  const listOfBrands = getListOfBrands();
  const listOfMakers = getListOfMakers();

  const [makers, setMakers] = useState(shownMakers);
  const [brands, setBrands] = useState(shownBrands);
  const [shownAllMakers, setShownAllMakers] = useState(false);
  const [shownAllBrands, setShownAllBrands] = useState(false);
  const [filter, setFilter] = useState<Params>({
    priceFrom: 0,
    priceTo: 10000,
    makers: listOfMakers,
    brands: listOfBrands,
  });
  const dispatch = useAppDispatch();

  const handleShowAllMakers = () => {
    setShownAllMakers(!shownAllMakers);

    if (makers.length === 4) {
      setMakers(totalManufacturers);
    } else {
      setMakers(shownMakers);
    }
  };

  const handleShowAllBrands = () => {
    setShownAllBrands(!shownAllBrands);

    if (brands.length === 4) {
      setBrands(totalBrands);
    } else {
      setBrands(shownBrands);
    }
  };

  const handleSelectMakers = useCallback(
    (e: any) => {
      const { value, checked } = e.target;
      const { makers } = filter;

      const allMakers = [...makers, value];

      if (checked) {
        setFilter({
          ...filter,
          makers: allMakers,
        });
      }

      const selectedMakers =
        allMakers.length > listOfMakers.length
          ? allMakers.slice(listOfMakers.length)
          : makers;

      if (allMakers.length > listOfMakers.length) {
        setFilter({
          ...filter,
          makers: selectedMakers,
        });
      }
    },
    [filter, listOfMakers.length]
  );

  const handleSelectBrands = useCallback(
    (e: any) => {
      const { value, checked } = e.target;
      const { brands } = filter;

      const allBrands = [...brands, value];

      if (checked) {
        setFilter({
          ...filter,
          brands: allBrands,
        });
      }

      const selectedBrands =
        allBrands.length > listOfBrands.length
          ? allBrands.slice(listOfBrands.length)
          : brands;

      if (allBrands.length > listOfBrands.length) {
        setFilter({
          ...filter,
          brands: selectedBrands,
        });
      }
    },
    [filter, listOfBrands.length]
  );

  const handleResetFilter = useCallback(() => {
    setFilter({
      priceFrom: 0,
      priceTo: 10000,
      makers: listOfMakers,
      brands: listOfBrands,
    });
  }, [listOfBrands, listOfMakers]);

  const handleUncheck = () => {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[type=checkbox]'
    );
    return inputs.forEach((element) => (element.checked = false));
  };

  const handleGoodsSelection = () => {
    dispatch(setFilterStatus(false));
    dispatch(filterByParams(filter));

    console.log(filter);

    handleUncheck();
    handleResetFilter();
  };

  return (
    <div className="filter">
      <div className="filter__price">
        <span className="filter__price-name">Цена</span>
        <span className="filter__currency">₸</span>
      </div>
      <div className="filter__range">
        <div className="filter__range-wrap">
          <input
            type="text"
            className="filter__price-input"
            value={filter.priceFrom}
            onChange={(e) =>
              setFilter({ ...filter, priceFrom: +e.target.value })
            }
            placeholder="0"
          />
        </div>
        <span className="filter__range-line">-</span>
        <div className="filter__range-wrap">
          <input
            type="text"
            className="filter__price-input"
            value={filter.priceTo}
            onChange={(e) => setFilter({ ...filter, priceTo: +e.target.value })}
            placeholder="10 000"
          />
        </div>
      </div>

      <h6 className="filter__subtitle">Производитель</h6>
      <div className="filter__search">
        <CustomSearch />
      </div>

      <ul className="filter__check">
        {makers.map((maker, i) => (
          <li key={maker[0]} className="filter__check-item">
            <input
              type="checkbox"
              name="makers"
              placeholder="0"
              id={`maker-${i}`}
              value={maker[0] || ''}
              onClick={(e) => handleSelectMakers(e)}
            />
            <label htmlFor={`${maker[0]}`} className="filter__check-title">
              {maker[0]}
            </label>
            <span className="filter__check-count">({maker[1]})</span>
          </li>
        ))}
      </ul>
      <div className="filter__btn-show-all" onClick={handleShowAllMakers}>
        <span className="filter__show-all-name">Показать все</span>
        <span className="filter__show-all-img"></span>
      </div>

      <h6 className="filter__subtitle">Бренд</h6>
      <div className="filter__search">
        <CustomSearch />
      </div>

      <ul className="filter__check">
        {brands.map((brand, i) => (
          <li key={brand[0]} className="filter__check-item">
            <input
              type="checkbox"
              name="brands"
              placeholder="10000"
              id={`brand-${i}`}
              value={brand[0] || ''}
              onClick={(e) => handleSelectBrands(e)}
            />
            <label htmlFor={`${brand[0]}`} className="filter__check-title">
              {brand[0]}
            </label>
            <span className="filter__check-count">({brand[1]})</span>
          </li>
        ))}
      </ul>
      <div className="filter__btn-show-all" onClick={handleShowAllBrands}>
        <span className="filter__show-all-name">Показать все</span>
        <span className="filter__show-all-img"></span>
      </div>

      <div className="filter__buttons">
        <div className="filter__submit">
          <CustomButton
            title={'Показать'}
            addedClass={''}
            imageSrc={''}
            onClick={handleGoodsSelection}
          />
        </div>
        <div className="filter__reset" onClick={handleResetFilter}></div>
      </div>
    </div>
  );
};
