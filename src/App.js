import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Header from './components/layout/Header/Header';

import Home from './components/views/Home/Home';
import Ad from './components/views/Ad/Ad';
import OwnAds from './components/features/OwnAds/OwnAds';
import AddAd from './components/views/AddAd/AddAd';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ad/:id' element={<Ad />} />
        <Route path='/ads/own' element={<OwnAds />} />
        <Route path='/ad/add' element={<AddAd/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
