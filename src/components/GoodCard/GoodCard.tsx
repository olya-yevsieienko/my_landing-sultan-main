import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addGoodFromCardPage,
  incrementQuantityCardPage,
  decrementQuantityCardPage,
} from '../../store/cartSlice';
import { Good } from '../../types/Good';
import { CustomButton } from '../UI/CustomButton';

import './GoodCard.scss';
import cart from '../../image/icons/basket-white.svg';
import share from '../../image/icons/share.svg';
import show from '../../image/icons/show.svg';
import hide from '../../image/icons/hide.svg';

type Props = {
  good: Good;
};

export const GoodCard: React.FC<Props> = ({ good }) => {
  const [isOpenDescrptn, setIsOpenDescrptn] = useState(false);
  const [isOpenFeatures, setIsOpenFeatures] = useState(false);
  const dispatch = useAppDispatch();
  const { goodAmount } = useAppSelector((state) => state.cart);

  const handleOpenDescrptn = () => {
    setIsOpenDescrptn(!isOpenDescrptn);
  };

  const handleOpenFeatures = () => {
    setIsOpenFeatures(!isOpenFeatures);
  };

  return (
    <div className="card">
      <a
        href={good.url}
        className="card__wrap"
        target="_blank"
        rel="noreferrer"
      >
        <img src={good.url} alt={good.nameRu} className="card__img" />
      </a>

      <div className="card__main">
        <span className="card__availability">В наличии</span>

        <div className="card__good-name">
          <span className="card__name-en">{good.name}</span>
          <span className="card__name-ru">{good.nameRu}</span>
        </div>

        <div className="card__order">
          <span className="card__good-price">{good.price} ₸</span>

          <div className="card__control">
            <span
              className="card__decrease"
              onClick={() => dispatch(decrementQuantityCardPage())}
            >
              -
            </span>

            <span className="card__count">{goodAmount}</span>

            <span
              className="card__increase"
              onClick={() => dispatch(incrementQuantityCardPage())}
            >
              +
            </span>
          </div>

          <div className="card__cart-btn">
            <CustomButton
              title={'В корзину'}
              addedClass={'card__cart-title'}
              imageSrc={cart}
              onClick={() => dispatch(addGoodFromCardPage(good))}
            />
          </div>

          <div className="card__share-wrap">
            <img src={share} alt="Поделиться" className="card__share" />
          </div>

          <span className="card__delivery">
            При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
          </span>

          <span className="card__price-list">Прайс-лист</span>
        </div>

        <div className="card__option">
          <span className="card__option-name">Производитель:</span>
          <span className="card__option-value">{good.manufacturer.name}</span>
        </div>
        <div className="card__option">
          <span className="card__option-name">Бренд:</span>
          <span className="card__option-value">{good.brand.name}</span>
        </div>
        <div className="card__option">
          <span className="card__option-name">Артикул:</span>
          <span className="card__option-value">{good.manufacturer.number}</span>
        </div>
        <div className="card__option">
          <span className="card__option-name">Кол-во: </span>
          <span className="card__option-value">1 шт</span>
        </div>
        <div className="card__option">
          <span className="card__option-name">Штрихкод: </span>
          <span className="card__option-value">{good.barcode}</span>
        </div>
        <div className="card__option">
          <span className="card__option-name">
            {good.sizeType === 'volume' ? 'Объем товара:' : 'Вес товара:'}
          </span>
          <span className="card__option-value">{good.size}</span>
        </div>

        <div className="card__descrptn">
          <span className="card__open-subtitle" onClick={handleOpenDescrptn}>
            Описание{' '}
            <img
              src={isOpenDescrptn ? `${hide}` : `${show}`}
              alt=""
              className="card__icon-show"
            />
          </span>
          {isOpenDescrptn && (
            <p className="card__descrptn-text">{good.description}</p>
          )}
        </div>

        <div className="card__features">
          <span className="card__open-subtitle" onClick={handleOpenFeatures}>
            Характеристики{' '}
            <img
              src={isOpenFeatures ? `${hide}` : `${show}`}
              alt=""
              className="card__icon-show"
            />
          </span>
          {isOpenFeatures && (
            <>
              <div className="card__option">
                <span className="card__option-name">Назначение:</span>
                <span className="card__option-value">{good.name}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Тип:</span>
                <span className="card__option-value">{good.name}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Производитель:</span>
                <span className="card__option-value">
                  {good.manufacturer.number}
                </span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Бренд:</span>
                <span className="card__option-value">{good.brand.number}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Артикул:</span>
                <span className="card__option-value">{good.itemNumber}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Штрихкод:</span>
                <span className="card__option-value">{good.barcode}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">
                  {good.sizeType === 'volume' ? 'Объем товара:' : 'Вес товара:'}
                </span>
                <span className="card__option-value">{good.size}</span>
              </div>
              <div className="card__option">
                <span className="card__option-name">Кол-во в коробке:</span>
                <span className="card__option-value">{good.size}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
