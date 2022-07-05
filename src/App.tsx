import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from './pages/home';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
