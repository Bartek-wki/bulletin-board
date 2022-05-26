import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <MainLayout>
      <Header />
      <Routes>
      </Routes>
    </MainLayout>
  );
}

export default App;
