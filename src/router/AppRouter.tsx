import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

import { CatalogPage } from '../pages/CatalogPage';
import { GoodPage } from '../pages/GoodPage';
import { BasketPage } from '../pages/CartPage';

const AppRouter = () => {
  const { goods } = useAppSelector((state) => state.goods);

  return (
    <Routes>
      <Route path="/catalog">
        <Route index element={<CatalogPage />} />
        <Route path=":name/:id" element={<GoodPage goods={goods} />} />
      </Route>
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<Navigate to="/catalog" replace />} />
    </Routes>
  );
};

export default AppRouter;
