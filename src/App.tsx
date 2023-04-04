import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header';
import { GoodPage } from './pages/GoodPage';
import { BasketPage } from './pages/CartPage/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import { useAppSelector } from './hooks/redux';
import { Footer } from './components/Footer';
import './App.scss';

const App: React.FC = () => {
  const { goods } = useAppSelector((state) => state.goods);

  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Routes>
          <Route path="/catalog">
            <Route index element={<CatalogPage />} />
            <Route path=":name/:id" element={<GoodPage goods={goods} />} />
          </Route>
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<Navigate to="/catalog" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
