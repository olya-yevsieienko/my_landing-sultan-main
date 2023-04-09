import React from 'react';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
