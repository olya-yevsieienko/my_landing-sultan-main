import React from 'react';

import './Pagination.scss';

type Props = {
  currentPage: number;
  pagesCount: number;
  onChangePage: (pageNum: number) => void;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  pagesCount,
  onChangePage,
}) => {
  return (
    <div className="pagination">
      <span
        className="pagination__left"
        onClick={() => onChangePage(currentPage - 1)}
      ></span>
      {[...new Array(pagesCount)].map((_, i) => (
        <span
          key={i}
          className={`pagination__number ${
            currentPage - 1 === i ? 'pagination__number--active' : ''
          }`}
          onClick={() => onChangePage(i + 1)}
        >
          {i + 1}
        </span>
      ))}
      <span
        className="pagination__right"
        onClick={() => onChangePage(currentPage + 1)}
      ></span>
    </div>
  );
};
