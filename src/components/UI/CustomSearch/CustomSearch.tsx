import React from 'react';

import './CustomSearch.scss';

export const CustomSearch: React.FC = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Поиск..." />
      <div className="search__magnifier"></div>
    </div>
  );
};
