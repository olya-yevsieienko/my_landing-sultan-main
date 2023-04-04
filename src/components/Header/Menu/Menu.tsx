import React from 'react';

import './Menu.scss';

export const Menu: React.FC = () => {
  return (
    <ul className="menu">
      <li className="menu__item">О компании</li>
      <li className="menu__item">Доставка и оплата</li>
      <li className="menu__item">Возврат</li>
      <li className="menu__item">Контакты</li>
    </ul>
  );
};
