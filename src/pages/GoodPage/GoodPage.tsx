import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoodCard } from '../../components/GoodCard';
import { CustomComeBack } from '../../components/UI/CustomComeBack';
import { Good } from '../../types/Good';

import './GoodPage.scss';

type Props = {
  goods: Good[];
};

export const GoodPage: React.FC<Props> = ({ goods }) => {
  const { id } = useParams();

  let selectedGood;
  if (id) {
    selectedGood = goods.find((good) => good.id === +id);
  }

  return (
    <section className="good-card">
      <div className="catalog__back">
        <CustomComeBack path="/catalog" />
      </div>

      <ul className="good-card__nav">
        <li className="good-card__nav-link">Главная</li>
        <span className="good-card__nav-line"></span>
        <li className="good-card__nav-link">
          <Link to={'/catalog'}>Косметика и гигиена</Link>
        </li>
        <span className="good-card__nav-line"></span>
        <li className="good-card__nav-link good-card__nav-link--active">
          {selectedGood?.name}
        </li>
      </ul>

      {selectedGood && <GoodCard good={selectedGood} />}
    </section>
  );
};
