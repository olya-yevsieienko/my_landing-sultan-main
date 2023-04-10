import React, { useCallback, useState } from 'react';
import { Good } from '../../../types/Good';
import { CatalogGood } from '../CatalogGood';
import { Pagination } from '../../Pagination';
import './CatalogList.scss';

type Props = {
  goods: Good[];
};

export const CatalogList: React.FC<Props> = ({ goods }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(15);

  const lastGoodIndex = currentPage * goodsPerPage;
  const firstGoodIndex = lastGoodIndex - goodsPerPage;

  const currentGoods = goods.slice(firstGoodIndex, lastGoodIndex);
  const pagesCount = Math.ceil(goods.length / goodsPerPage);

  const handlePagination = useCallback(
    (pageNum: number) => {
      let currentPageNum = pageNum;

      if (currentPageNum > pagesCount) {
        currentPageNum = pagesCount;
      }
      if (currentPageNum < 1) {
        currentPageNum = 1;
      }

      setCurrentPage(currentPageNum);
      window.scroll(0, 0);
    },
    [pagesCount]
  );

  return (
    <div className="list">
      <div className="list__content" data-testid={'catalog-list'}>
        {currentGoods.map((good) => (
          <CatalogGood good={good} key={good.id} />
        ))}
      </div>

      <div className="list__pagination">
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onChangePage={handlePagination}
        />
      </div>

      <p className="list__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
        ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate
        feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
        pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
        dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div>
  );
};
