import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Header from './components/layout/Header/Header';

import Home from './components/views/Home/Home';
import Ad from './components/views/Ad/Ad';

function App() {
  return (
    <MainLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ad/:id' element={<Ad />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
