import React from 'react';
import { Good } from '../../../types/Good';
import { Link } from 'react-router-dom';
import {
  getShortenDscrptn,
  getShortenName,
} from '../../../utils/getShortenData';

import './CartGood.scss';
import weight from '../../../image/icons/weight.svg';
import volume from '../../../image/icons/volume.svg';

type Props = {
  good: Good;
};

export const CartGood: React.FC<Props> = ({ good }) => {
  const goodTitle = getShortenName(`${good.name} ${good.nameRu}`);
  const goodDscrptn = getShortenDscrptn(good.description);

  return (
    <div className="cart-good">
      <img className="cart-good__img" src={good.url} alt={good.name} />

      <div className="cart-good__option">
        <div className="cart-good__size">
          <img
            className="cart-good__size-type"
            src={good.sizeType === 'weight' ? `${weight}` : `${volume}`}
            alt=""
          />
          <span className="cart-good__size-value">{good.size}</span>
        </div>

        <Link to={`/catalog/${good.name}/${good.id}`}>
          <h4 className="cart-good__title">{goodTitle}</h4>
        </Link>
        <span className="cart-good__descrptn">{goodDscrptn}</span>
      </div>
    </div>
  );
};
