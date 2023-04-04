import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { addGood } from '../../../store/cartSlice';

import { Good } from '../../../types/Good';
import { CustomButton } from '../../UI/CustomButton';
import weight from '../../../image/icons/weight.svg';
import volume from '../../../image/icons/volume.svg';
import basket from '../../../image/icons/basket-white.svg';
import { getShortenName } from '../../../utils/getShortenData';
import './CatalogGood.scss';

type Props = {
  good: Good;
};

export const CatalogGood: React.FC<Props> = ({ good }) => {
  const dispatch = useAppDispatch();
  const goodNameRu = getShortenName(good.nameRu);

  return (
    <div className="good">
      <div className="good__main">
        <img className="good__image" src={good.url} alt={good.name} />

        <div>
          <div className="good__size-type">
            {good.sizeType === 'weight' ? (
              <img src={weight} alt="" className="good__icon-type" />
            ) : (
              <img src={volume} alt="" className="good__icon-type" />
            )}
            <span className="good__size">{good.size}</span>
          </div>
          <Link to={`/catalog/${good.name}/${good.id}`}>
            <h6 className="good__name">
              <span className="good__name-en">{good.name}</span>
              <span className="good__name-ru">{goodNameRu}</span>
            </h6>
          </Link>
          <div className="good__good-categories">
            {good.type.map((type) => (
              <span key={type} className="good__good-type">
                {type}
              </span>
            ))}
          </div>

          <div className="good__option">
            <span className="good__option-name">Штрихкод: </span>
            <span className="good__option-value">{good.barcode}</span>
          </div>

          <div className="good__option">
            <span className="good__option-name">Производитель:</span>
            <span className="good__option-value">{good.manufacturer.name}</span>
          </div>

          <div className="good__option">
            <span className="good__option-name">Бренд: </span>
            <span className="good__option-value">{good.brand.name}</span>
          </div>
        </div>
      </div>

      <div className="good__order">
        <span className="good__good-price">{good.price} ₸</span>
        <div className="good__button-wrap">
          <CustomButton
            title={'В корзину'}
            addedClass={'good__button'}
            imageSrc={basket}
            onClick={() => dispatch(addGood(good))}
          />
        </div>
      </div>
    </div>
  );
};
